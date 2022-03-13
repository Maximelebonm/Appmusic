const BaseController = require("./base.controller");
const MusiqueService = require("../services/musique.service")
const services = require("../services");


class MusiqueController extends BaseController {
    getOne = async (id) => {
        const service = new MusiqueService();
        const result = await service.getOne(id);
        return result;
    }
    getId = async () => {
        const service = new MusiqueService();
        const result = await service.getId();
        return result;
    }
    get = async () => {
        const service = new MusiqueService();
        const result = await service.get();
        return result;
    }

}

module.exports = MusiqueController;