const BaseRouter = require("./base.router");

class MusiqueRouter extends BaseRouter {

    constructor(){
        super();
        this.initalizeRoutes();
    }
initalizeRoutes = () => {

    this.router.get("/", async (req, res, next) => {
        const response = await this.controller.get(req.body);
        res.send(response);
    });
}
}
module.exports = MusiqueRouter;