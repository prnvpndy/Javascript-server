"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const config_1 = require("./config");
console.log('Config is', config_1.config);
const server = new Server_1.default({ port: 9000 });
server.bootstrap().run();
//# sourceMappingURL=index.js.map