"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    return next({
        error: "Not Found",
        code: 404
    });
};
//# sourceMappingURL=notFoundRoute.js.map