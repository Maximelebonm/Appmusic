const expressRouter = require ("express").Router;
const controllers = require('../controllers')

class BaseRouter {
    constructor() {
        this.router = expressRouter();
        this.name = this.constructor.name.replace(`Router`, ``);
        const ControllerClass = require(`../controllers/${this.name}.controller`);
        this.controller = new ControllerClass();
      }

}
module.exports = BaseRouter;