"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var Pool = pg_1.default.Pool;
var connectionDb = new Pool({
    connectionString: process.env.DATABASE_URL,
});
exports.default = connectionDb;
