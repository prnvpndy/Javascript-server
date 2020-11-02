"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create a class and define methods according to the ticket#39522
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.use((req, res, next) => {
            console.log('Inside First MidleWare');
            next();
        });
        app.use('/health-check', (req, res) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });
        app.use('/api', router_1.default);
        app.use(routes_1.notFoundHandler);
        app.use(routes_1.errorHandler);
        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map