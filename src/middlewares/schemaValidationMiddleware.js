"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
var index_js_1 = require("../errors/index.js");
function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            var errors = error.details.map(function (detail) { return detail.message; });
            throw index_js_1.default.conflictError(errors);
        }
        next();
    };
}
exports.validateSchema = validateSchema;
