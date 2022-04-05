const BaseRouter = require("./base.router");

class AppuserRouter extends BaseRouter {

    constructor(){
        super();
        this.initalizeRoutes();
    }

    initalizeRoutes = () => {

        // auth/login
        this.router.post("/login", async (req, res, next) => {
            const response = await this.controller.login(req);
            res.json(response);
        });

        // /auth/register
        this.router.post("/register", async (req, res, next) => {
            const response = await this.controller.register(req);
            res.json(response);
        });

        // /auth/validate
        this.router.post("/validate", async (req, res, next) => {
            const response = await this.controller.validate(req);
            res.json(response);
        });

        // /auth/renew
        this.router.post("/renew", async (req, res, next) => {
            // const response = await this.controller.renew(req);
            // res.json(response);
        });
        this.router.get("/refresh_token", async (req, res, next) => {
            const response = await this.controller.check(req);
            res.json(response);
        });

        // /auth
        this.router.get("/", async (req, res, next) => {
            const response = await this.controller.check(req);
            res.json(response);
            next(this.controller.check);
        });
    }
}
module.exports = AppuserRouter;