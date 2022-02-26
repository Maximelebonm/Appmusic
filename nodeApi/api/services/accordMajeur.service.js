const BaseService = require("./base.service");

class AccordMajeurService extends BaseService {
    get = async () => {
        const sql = `SELECT * FROM ${this.table}`;
        const rows =  await BaseService.executeQuery(sql);
        return rows.length == 1 ? rows.pop() : null;
    }
}

module.exports = AccordMajeurService;