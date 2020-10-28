"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        //console.log('Hi');
        this.app.use((req, res, next) => {
            // res.send('I am OK');
            console.log('------1--------');
            next();
        });
        this.app.use('/health-check', (req, res) => {
            console.log('-------2------------');
            res.send('I am OK');
        });
        this.app.use(routes_1.notFoundHandler);
        this.app.use(routes_1.errorHandler);
        // mount all routes on /api path
        // this.app.use(apiPrefix, router);
    }
    /*{
          const { app } = this;

          app.use((req, res, next)=>{
                console.log("Inside First Middleware");
                next()
                return;
          });

          app.get('/Health-Check', (req, res, next) => {
                console.log("Inside Second Middleware");
                res.send('I am Well');
                
          });
                app.use(notFoundHandler);
                app.use(errorHandler);
          return this;
    }*/
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running ${PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map