const BaseRouter = require("./base.router");

class ProfilRouter extends BaseRouter {

    constructor(){
        super();
        this.initalizeRoutes();
    }
    initalizeRoutes = () => {

    this.router.get("/", async (req, res, next) => {
        // const response = await this.controller.login(req);
        // res.json(response);
        next(this.controller.forUser);       
    });


    }
}
module.exports = ProfilRouter;