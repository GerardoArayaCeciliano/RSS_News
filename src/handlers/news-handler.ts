import MyConfiguration from "../singletonDb";
const itemsReceived: string[] = [];
export function newItemHandler(item: any): any {
  console.log('Entro',item);

  if (newsExist(item)) {
    console.log('Existe');
  }
  else {
    saveItemsInItemsReceived(item);
    saveItemInDatabase(item);
  }
}
async function saveItemInDatabase(item: any) {
  let dbConnection = MyConfiguration.getInstance();
  const sql = `Insert into tbl_noticias(title,description,officialURL) values('${item.title}','${item.description}','${item.link}')`;
  (await dbConnection.connectDB).query(sql).catch((error: any) => {
    console.log('Error');
  })
}

function fixNullItemInformation(item: any) {
  item.title = item.title || '';

  item.description = item.description || '';

  item.link = item.link || '';
}

function newsExist(item: any): boolean {
  return itemsReceived.includes(item.title);
}


function saveItemsInItemsReceived(item: any) {
  itemsReceived.push(item.title);
  if (itemsReceived.length == 100) {
    itemsReceived.splice(0, 1);
  }
}
