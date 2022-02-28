const BaseService = require("./base.service");

class AccordMajeurService extends BaseService {
    // get = async () => {
    //     const sql = `SELECT * FROM ${this.table}`;
    //     const rows =  await BaseService.executeQuery(sql);
    //     return rows;
    // }

    get = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE id=${id}`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
      };
}

module.exports = AccordMajeurService;