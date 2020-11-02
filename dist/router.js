"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const mainRouter = express_1.Router();
mainRouter.use('/trainee', controllers_1.traineeRouter);
exports.default = mainRouter;
//# sourceMappingURL=router.js.map