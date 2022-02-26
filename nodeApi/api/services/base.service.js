const mysql = require("mysql");
const config = require("../configs/db.config");

class BaseService {
    constructor() {
      this.name = this.constructor.name.replace(`Service`, ``);
      this.table = this.name;
    }

    static db;
    static connect = () => {
      if (!BaseService.db) {
        BaseService.db = mysql.createPool({
          host: config.HOST,
          port: config.PORT,
          user: config.USER,
          password: config.PASS,
          database: config.NAME,
        });
      }
      return BaseService.db;
    };
  
    static executeQuery = async (sql, params) => {
      return await new Promise((resolve, reject) => {
        BaseService.connect().query(sql, params, (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        });
      })
      .catch(err => {
          console.error("DB Error", err);
          return err;
      });
    };
    executeQuery= async (sql, params) => {
      return await BaseService.executeQuery(sql, params)
    }

    

}
module.exports = BaseService;