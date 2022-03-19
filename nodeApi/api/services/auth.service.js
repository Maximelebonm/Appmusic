const BaseService = require("./base.service");

class AuthService extends BaseService {
    select = async (params) => {
        let sql = `SELECT * FROM ${this.table} WHERE deleted = ?`;
        if(params?.where){
            sql += ` AND (${params.where.replace('&&','AND').replace('||','OR')})`;
        }
        sql += ";"
        const rows = await BaseService.executeQuery(sql, [0]);
        return rows;
      };
}

module.exports = AuthService;