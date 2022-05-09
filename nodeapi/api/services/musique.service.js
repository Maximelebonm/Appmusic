/*auto-generated*/
const DbService = require("./db.service");
class MusiqueService extends DbService{ 

    getOne = async (id) => {
            const sql = `SELECT * FROM ${this.table} WHERE id=${id}`;
            const rows = await DbService.executeQuery(sql);
            const row = rows.length === 1 ? rows.pop() : null;
            return row;
        };
    get = async () => {
            const sql = `SELECT * FROM ${this.table}`;
            const rows = await DbService.executeQuery(sql);
            return rows;
        };
}
module.exports = MusiqueService;