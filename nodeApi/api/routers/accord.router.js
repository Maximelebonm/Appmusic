const BaseRouter = require("./base.router");

class AccordRouter extends BaseRouter {
    constructor(){
        super();
        this.initalizeRoutes();
    }

initalizeRoutes =() => {
    // this.router.get("/:id", async (req, res) => {
    //     console.log("this.controller ",this.controller)
    //     const response = await this.controller.get(req.id);
    //     res.json(response);
    // });

    this.router.get("/:id", async (req, res) => {
        const response = await this.controller.getOne(req.params.id);
      res.send(response);
    });

    this.router.get("/", async (req, res) => {
        const response = await this.controller.getId(req.body);
      res.send(response);
    });

    // this.router.get("/", async (req, res) => {
    //     const response = await this.controller.get(req.body);
    //   res.send(response);
    // });
    }
}
module.exports = AccordRouter;