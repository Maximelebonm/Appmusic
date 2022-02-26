const BaseController = require("./base.controller");
const Accordservices = require("../services/accordMajeur.service")
const services = require("../services");


class AccordController extends BaseController {
    get = async () => {
        const service = new Accordservices();
        const result = await service.get();
        return result;
    }

}

module.exports = AccordController;