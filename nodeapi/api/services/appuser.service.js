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
            let sql = `SELECT * FROM ${this.table} WHERE deleted = ?`;
            if(params?.where){
                sql += ` AND (${params.where.replace('&&','AND').replace('||','OR')})`;
            }
            sql += ";"
            const rows = await BaseService.executeQuery(sql, [0]);
            return this.ModelClass.from(rows);
           };
         }

         updateUser = async (params) => {
            const where = params.where?.replaceAll('&&','AND').replaceAll('||','OR') || '0';
            const fields = this.ModelClass.toSqlProps(params.fields);
            let values = [];
            for(const key in fields){
                values.push(`${key}=${fields[key]}`);
            }
            values = values.join(',');
            let sql = `UPDATE ${this.table} SET ${values} WHERE ${where};`;
            const result = await DbService.executeQuery(sql);
            return result.affectedRows > 0 ? await this.select({where}) : false;
          }
module.exports = AppuserService;