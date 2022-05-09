const BaseController = require("./base.controller");
const Musiqueservices = require("../services/musique.service")
const services = require("../services");


class MusiqueController extends BaseController {
    getOne = async (id) => {
        const service = new Musiqueservices();
        const result = await service.getOne(id);
        return result;
    }
    get = async () => {
        const service = new Musiqueservices();
        const result = await service.get();
        return result;
    }

}

module.exports = MusiqueController;