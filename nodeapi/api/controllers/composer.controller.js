
const BaseController = require("./base.controller");
const ComposerServices = require("../services/composer.service")
const services = require("../services");


class ComposerController extends BaseController {
    getOne = async (id) => {
        const service = new ComposerServices();
        const result = await service.getOne(id);
        return result;
    }
    get = async () => {
        const service = new ComposerServices();
        const result = await service.get();
        return result;
    }

}

module.exports = ComposerController;
