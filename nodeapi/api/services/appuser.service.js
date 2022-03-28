/*auto-generated*/
const DbService = require("./db.service");
class AppuserService extends DbService{  

    insertUser = async (params) => {
            const columns = Object.keys(params).join(',');
            let values = Object.values(params);
            values = values.map(val => {
                return val = ('"' + val.replace('"','') + '"')
            });// `'${val.replace("'","\'")}'`);
            values = values.join(',')
            let sql = `INSERT INTO ${this.table} (${columns}) VALUES (${values})`;
            const result = await DbService.executeQuery(sql);
            console.log(result);
            let row = null;
            if(result.affectedRows === 1){
                row = await this.getOne(result.insertId);
            }
            return row;
        }
        
        // selectWhere = async (params) => {
        //     let sql = `SELECT * FROM ${this.table} WHERE deleted = ?`;
        //     if(params?.where){
        //         sql += ` AND (${params.where.replace('&&','AND').replace('||','OR')})`;
        //     }
        //     sql += ";"
        //     const rows = await BaseService.executeQuery(sql, [0]);
        //     return this.ModelClass.from(rows);
        //   };
         }
module.exports = AppuserService;