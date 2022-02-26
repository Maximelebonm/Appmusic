const BaseRouter = require("./base.router");

class AccordRouter extends BaseRouter {
    constructor(){
        super();
        this.initalizeRoutes();
    }

initalizeRoutes =() => {

    this.router.get("/", async (req, res) => {
        console.log("this.controller ",this.controller)
        const response = await this.controller.get(req.body);
        res.json(response);
    });







    }
}
module.exports = AccordRouter;