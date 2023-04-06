"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemma = void 0;
var joi_1 = require("joi");
exports.userSchemma = joi_1.default.object({
    name: joi_1.default.string().min(2).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
