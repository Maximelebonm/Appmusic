const BaseController = require("./base.controller");
const MailerService = require('../services/mailer.service');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs")("app");
const appConfig = require("../configs")("app");



class AppUserController extends BaseController {

  getUser = async (login) => {
    const UserServiceClass = require('../services/appuser.service');
    const service = new UserServiceClass();
    const users = await service.select({where: `login = '${login}'`});
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
    const UserService = require("../services/appuser.service");
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
        const payload = {mail: req.body.email, role: 1};
        const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
        //SEND MAIL
        const html = 
        `
        <b>Confirmez votre inscription : </b>
        <a href="http://localhost:3000/account/validation?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>
        
        `;
        await MailerService.send({to: req.body.email, subject:"Confirmer votre inscription", html, token});
        return true;
    }
    return false;
  }
  validate = async (req) => {
    const UserValid = require('../services/appuser.service');
    const userNew = new UserValid();
    const valid = await userNew.insertUser();
    
        
    return true;
  };
}
module.exports = AppUserController;