const BaseService = require("./base.service");

class AccordMajeurService extends BaseService {
    // get = async () => {
    //     const sql = `SELECT * FROM ${this.table}`;
    //     const rows =  await BaseService.executeQuery(sql);
    //     return rows;
    // }

    getOne = async (id) => {
        const sql = `SELECT chemin FROM ${this.table} WHERE id=${id}`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
      };


      getId = async () => {
        const sql = `SELECT * FROM ${this.table}`;
        const rows = await BaseService.executeQuery(sql);
        // const row = rows.length === 1 ? rows.pop() : null;
        return rows;
      };

      get = async () => {
        const sql = `SELECT chemin FROM ${this.table}`;
        const rows = await BaseService.executeQuery(sql);
        // const row = rows.length === 1 ? rows.pop() : null;
        return rows;
      };
}

module.exports = AccordMajeurService;