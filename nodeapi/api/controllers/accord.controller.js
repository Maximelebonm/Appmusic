const BaseController = require("./base.controller");
const Accordservices = require("../services/accord.service")
const services = require("../services");


class AccordController extends BaseController {
    getOne = async (id) => {
        const service = new Accordservices();
        const result = await service.getOne(id);
        return result;
    }
    get = async () => {
        const service = new Accordservices();
        const result = await service.get();
        return result;
    }

}

module.exports = AccordController;