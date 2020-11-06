// create a class and define methods according to the ticket#39522
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import notFoundRoute from './libs/routes/notFoundRoute';
import Database from './libs/Database';
import Iconfig from './config/IConfig';

import routes from './router';
class Server {
    app;
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    setupRoutes() {
        const { app } = this;

        app.use ((req, res, next) => {
            console.log('Inside First MidleWare');
            next();
        });

        app.use('/health-check', (req, res) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });

        app.use('/api', routes);
        app.use(notFoundHandler);
        app.use(errorHandler);

        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {

const {  PORT, NODE_ENV, MONGO_URL } = this.config;
        Database.open(MONGO_URL)
        .then ( ( res ) => {
            console.log('Successfully conected to Mongo');
            this.app.listen(PORT, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(`App is running on port ${PORT}`);
            });

        })
        .catch ( err => {
            console.log(err);
        });
    }
}
export default Server;


