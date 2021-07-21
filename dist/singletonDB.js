"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("./configuration/db.config");
class singletonDB {
    constructor() { }
    static initialize() {
        this.connectDB = db_config_1.getDatabaseConnection();
    }
    static getInstance() {
        if (!this.instance) {
            this.initialize();
            this.instance = new singletonDB();
        }
        return this.instance;
    }
    get connectDB() {
        return singletonDB.connectDB;
    }
}
exports.default = singletonDB;
