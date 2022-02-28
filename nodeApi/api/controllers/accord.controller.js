const BaseController = require("./base.controller");
const Accordservices = require("../services/accordMajeur.service")
const services = require("../services");


class AccordController extends BaseController {
    get = async (id) => {
        const service = new Accordservices();
        const result = await service.get(id);
        return result;
    }

}

module.exports = AccordController;