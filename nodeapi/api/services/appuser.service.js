/*auto-generated*/
const BaseService = require("./db.service");


class AppuserService extends BaseService{  

    insertUser = async (params) => {
            const columns = Object.keys(params).join(',');
            let values = Object.values(params);
            values = values.map(val => {
                return val = ('"' + val.replace('"','') + '"')
            });// `'${val.replace("'","\'")}'`);
            values = values.join(',')
            let sql = `INSERT INTO ${this.table} (${columns}) VALUES (${values})`;
            const result = await BaseService.executeQuery(sql);
            console.log(result);
            let row = null;
            if(result.affectedRows === 1){
                row = await this.selectWhere(result.insertId);
            }
            return row;
        }
        
        selectWhere = async (params) => {
            let sql = `SELECT * FROM ${this.table} WHERE Id_appuser=${params.where}`;
            const rows = await BaseService.executeQuery(sql, [0]);
            return this.ModelClass.from(rows);
           };
         

         updateUser = async (params) => {
            const where = params.where;
            let values = params.password;
            let passwordField = "appuser.password";
            let sql = `UPDATE ${this.table} SET ${passwordField} = '${values}' WHERE Id_appuser=${where};`;
            const result = await BaseService.executeQuery(sql);
            return result.affectedRows > 0 ? await this.selectWhere({where}) : false;
          }
          
          deleteUser = async (params) => {
            const where = params.where?.replaceAll('&&','AND').replaceAll('||','OR') || '0';
            let sql = `DELETE FROM ${this.table} WHERE ${where};`;
            const result = await DbService.executeQuery(sql);
            return result.AffectedRows > 0;
          }
}
module.exports = AppuserService;