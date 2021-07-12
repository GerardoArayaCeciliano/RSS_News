import { getDatabaseConnection } from "../configuration/db.config";

const itemsReceived: string[] = [];
export function newItemHandler(item:any):any{
  console.log('Entro',item);
  
    //  if(newsExist(item)){
    //    console.log('Existe');
    //  }
    //  else
    //  {
    //    saveItemsInItemsReceived(item);
    //    saveItemInDatabase(item);
    //  }
    
  }
  async function saveItemInDatabase(item: any) {
    const dbConnection = await getDatabaseConnection();
    fixNullItemInformation(item);
    //const sql = `Insert into tbl_noticias(title,description,officialURL) values('${item.title}','${item.description}','${item.link}')`;
    //const sql = `Insert into tbl_noticias(title,officialURL) values('${item.title}','${item.link}')`;
    const sql = `Insert into tbl_noticias(description) values('${item.description}')`;
    dbConnection.query(sql).catch((err: any) => {
      process.exit(0);
    });
  }

function fixNullItemInformation(item: any) {
  item.title=item.title || '';

  item.description=item.description||'';

  item.link=item.link || '';
}

function newsExist(item: any):boolean {
  return itemsReceived.includes(item.title);
}


function saveItemsInItemsReceived(item: any) {
  itemsReceived.push(item.title);
  if (itemsReceived.length == 100) {
    itemsReceived.splice(0, 1);
  }
}
