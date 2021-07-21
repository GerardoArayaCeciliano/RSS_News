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
exports.newItemHandler = void 0;
const console_1 = __importDefault(require("console"));
const singletonDB_1 = __importDefault(require("../singletonDB"));
const itemsReceived = [];
function newItemHandler(item) {
    //  console.log('Entro',item);
    if (newsExist(item)) {
        console_1.default.log('Existe');
    }
    else {
        saveItemsInItemsReceived(item);
        saveItemInDatabase(item);
    }
}
exports.newItemHandler = newItemHandler;
function saveItemInDatabase(item) {
    return __awaiter(this, void 0, void 0, function* () {
        let dbConnection = singletonDB_1.default.getInstance();
        // console.log(item.date);
        const d = new Date(item.date);
        const sql = `Insert into stock_noticias(title,description,officialURL) values('${item.title}','${item.description}','${item.link}')`;
        (yield dbConnection.connectDB).query(sql).catch((error) => {
            console_1.default.log('Error');
        });
    });
}
function fixNullItemInformation(item) {
    item.title = item.title || '';
    item.description = item.description || '';
    item.link = item.link || '';
}
function newsExist(item) {
    return itemsReceived.includes(item.title);
}
function saveItemsInItemsReceived(item) {
    itemsReceived.push(item.title);
    if (itemsReceived.length == 100) {
        itemsReceived.splice(0, 1);
    }
}
