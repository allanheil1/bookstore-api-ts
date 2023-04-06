"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchemma = void 0;
var joi_1 = require("joi");
exports.bookSchemma = joi_1.default.object({
    name: joi_1.default.string().min(2).required(),
    author: joi_1.default.string().required(),
    userId: joi_1.default.number(),
    available: joi_1.default.boolean().default(true),
});
