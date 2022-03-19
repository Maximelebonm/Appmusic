const BaseController = require("./base.controller");
const AuthService = require("../services/auth.service");
const bcrypt = require("bcrypt");
const config = require('../configs/auth.config');
const jwt = require('jsonwebtoken');


class AuthController extends BaseController {
    login = async (req) => {
        const service = new AuthService();
        const results = await service.select({
          where: `email = '${req.body.email}'`,
        });
        const user = results.length === 1 ? results.pop() : null;
        if(user != null){
            let adminpwd = bcrypt.hashSync("test", 10, function(err, hash) {
                return hash;
            });
            console.log("hash",adminpwd);
            const result =  await bcrypt.compare(req.body.password, `${config.HASH_PREFIX + user.password}`);
    
            if(result){
                const {email, role} = user;
                const token = jwt.sign({email, role}, config.JWT_SECRET, { expiresIn: '1d' });
                return {email, role, token, result: true, message: "Bienvenue !"};
            }
            return {result: false, message: "Mot de passe incorrect !"};
        }
        return {result: false, message: "Identifiant incorrect !"};
      };
    
      register = async (req) => { 
        const service = new AuthService();
        const results = await service.select({
          where: `email = '${req.body.email}'`,
        });
        const user = results.length === 1 ? results.pop() : null;
        if(user == null){
            return "envoyer un mail";
        }
        else {
    
            return "email existe déjà";
        }
      };
      validate = async (req) => {
        return "validate";
      };
      renew = async (req) => {
        return "renew";
      };
      check = async (req) => {
        const auth = req.cookies.auth;
        if(auth){
            const result = jwt.verify(auth, config.JWT_SECRET);
            if(result){
                return {result:true, role:result.role}
            }
        }
        return {result:false, role:0}
      }

}

module.exports = AuthController;