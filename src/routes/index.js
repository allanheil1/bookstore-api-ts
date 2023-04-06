"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookRoutes_js_1 = require("./bookRoutes.js");
var userRoutes_js_1 = require("./userRoutes.js");
var routes = (0, express_1.Router)();
routes.use("/users", userRoutes_js_1.default);
routes.use("/books", bookRoutes_js_1.default);
exports.default = routes;
