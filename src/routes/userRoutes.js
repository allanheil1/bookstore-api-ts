"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers_js_1 = require("../controllers/userControllers.js");
var schemaValidationMiddleware_js_1 = require("../middlewares/schemaValidationMiddleware.js");
var User_js_1 = require("../schemas/User.js");
var userRoutes = (0, express_1.Router)();
userRoutes.post('/signup', (0, schemaValidationMiddleware_js_1.validateSchema)(User_js_1.userSchemma), userControllers_js_1.default.create);
userRoutes.post("/signin", userControllers_js_1.default.signin);
exports.default = userRoutes;
