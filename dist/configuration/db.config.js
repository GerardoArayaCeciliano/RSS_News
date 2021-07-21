"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConnection = exports.getMysqlConfiguration = void 0;
const mariadb_1 = __importDefault(require("mariadb"));
function getMysqlConfiguration() {
    return {
        host: '143.244.169.216',
        user: 'usr_reviews_server',
        password: 'd34j08$hf.3De88$34f',
        port: 3306,
        database: 'bd_otc_reviews',
        connectionLimit: 5
    };
}
exports.getMysqlConfiguration = getMysqlConfiguration;
function getDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = mariadb_1.default.createPool(getMysqlConfiguration());
        const dbConnection = yield pool.getConnection();
        return dbConnection;
    });
}
exports.getDatabaseConnection = getDatabaseConnection;
