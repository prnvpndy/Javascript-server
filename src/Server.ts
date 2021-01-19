// create a class and define methods according to the ticket#39522
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import notFoundRoute from './libs/routes/notFoundRoute';
import Database from './libs/Database';
import Iconfig from './config/IConfig';
import * as cors from 'cors';

import routes from './router';
class Server {
    app;
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'JavaScript-Server API Swagger',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '4.1',
            apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }
    setupRoutes() {
        const { app } = this;
        app.use(cors());

        app.use ((req, res, next) => {
            console.log('Inside First MidleWare');
            next();
        });
        app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
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
        this.app.use(bodyParser.json());
    }
    run() {

const {  port, nodeEnv, mongoUrl } = this.config;
        Database.open(mongoUrl)
        .then((res) => {
            console.log('Successfully conected to Mongo');
            this.app.listen(port, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(`App is running on port ${port}`);
            })

        })
        .catch ( err => {
            console.log(err);
        });
    }
}
export default Server;


