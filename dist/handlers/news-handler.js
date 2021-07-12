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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newItemHandler = void 0;
const db_config_1 = require("../configuration/db.config");
const itemsReceived = [];
function newItemHandler(item) {
    console.log('Entro', item);
    //  if(newsExist(item)){
    //    console.log('Existe');
    //  }
    //  else
    //  {
    //    saveItemsInItemsReceived(item);
    //    saveItemInDatabase(item);
    //  }
}
exports.newItemHandler = newItemHandler;
function saveItemInDatabase(item) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbConnection = yield db_config_1.getDatabaseConnection();
        fixNullItemInformation(item);
        //const sql = `Insert into tbl_noticias(title,description,officialURL) values('${item.title}','${item.description}','${item.link}')`;
        //const sql = `Insert into tbl_noticias(title,officialURL) values('${item.title}','${item.link}')`;
        const sql = `Insert into tbl_noticias(description) values('${item.description}')`;
        dbConnection.query(sql).catch((err) => {
            process.exit(0);
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
