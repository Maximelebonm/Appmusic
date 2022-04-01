const BaseController = require("./base.controller");
const MailerService = require('../services/mailer.service');
const UserService = require('../services/appuser.service');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs")("app");
const appConfig = require("../configs")("app");



class AppUserController extends BaseController {
  
  getUser = async (email) => {
    const service = new UserService();
    const users = await service.select({where: `email = '${email}'`});
    return users.length === 1 ? users.pop() : null;
  }
  
  check = async (req) => {  
    const token = req.cookies.auth;
    if (token) {
        let result;
        try{
            result = jwt.verify(token, config.JWT_SECRET);
        }
        catch{}
        return result && result.email;
    }
    return false;
  }

  login = async (req) => {
    const userService = new UserService();
    const rows = await userService.select({
      where: `email='${req.body.email}'`,
    });
    if (rows.length === 1) {
      const user = rows.pop();
      const { email } = user;
      const token = jwt.sign({ email }, config.JWT_SECRET);
      return { token };
    } else {
      return { email: req.body.email };
    }
  }

  register = async (req) => {
    if(req.method !== 'POST') return {status:405};
    
    const user = await this.getUser(req.body.email);
    if(!user){
        const payload = {mail: req.body.email, role: 1,password : req.body.password, nom : req.body.nom, prenom : req.body.prenom, pseudo : req.body.pseudo};
        const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
        //SEND MAIL
        const html = 
        `
        <b>Confirmez votre inscription : </b>
        <a href="http://localhost:3000/account/validation?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>
        
        `;
        await MailerService.send({to: req.body.email, subject:"Confirmer votre inscription", html});
        return true;
    }
    return false;
  }
  validate = async (req) => {
    const token = req.body.token;
    let payload
    let user
    try{
      payload = jwt.verify(token,appConfig.JWT_SECRET);
      user = await this.getUser(payload.mail);
    }
    catch{
      return {data:{completed:false, message:"Désolé une erreur est survenue ..."}};
    }
    if(payload && !user){ 
      const userNew = new UserService();
      const password = (await bcrypt.hash(payload.password,8)).replace(appConfig.HASH_PREFIX,'');
      const user = await userNew.insertUser({email:payload.mail, password:password, role:''+payload.role,nom : payload.nom, prenom : payload.prenom, pseudo : payload.pseudo});
      return user ?
          {data:{completed:true, message:"votre compte est bien activé, vous pouvez vous connecter"}} :
          {data:{completed:false, message:"Une erreur est survenue ...."}} ;
    }
    else if(user){
      return "Adresse déjà validé"
    }     
  }; 
};
module.exports = AppUserController;