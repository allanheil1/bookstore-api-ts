"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var express_1 = require("express");
var cors_1 = require("cors");
var index_js_1 = require("./routes/index.js");
var errorMiddleware_js_1 = require("./middlewares/errorMiddleware.js");
var app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use(index_js_1.default);
app.use(errorMiddleware_js_1.handleApplicationErrors);
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server running in port: ".concat(port)); });
