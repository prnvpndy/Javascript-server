"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("./Controller");
const validationHandler_1 = require("../../libs/validationHandler");
const validation_1 = require("./validation");
const traineeRouter = express_1.Router();
traineeRouter.route('/')
    .get(validationHandler_1.default(validation_1.default.get), Controller_1.default.get)
    .post(validationHandler_1.default(validation_1.default.create), Controller_1.default.create)
    .put(validationHandler_1.default(validation_1.default.update), Controller_1.default.update)
    .delete(validationHandler_1.default(validation_1.default.delete), Controller_1.default.delete);
exports.default = traineeRouter;
//# sourceMappingURL=routes.js.map