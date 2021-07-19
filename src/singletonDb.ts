import { PoolConnection } from "mariadb";
import { getDatabaseConnection } from "./configuration/db.config";

export default class singletonDB{
    private static instance:singletonDB;
     
    public static  connectDB:Promise<PoolConnection>;

    private constructor(){}
    private static initialize():void{
     this.connectDB=getDatabaseConnection();
    }
    public static getInstance():singletonDB{
        if(!this.instance){
            this.initialize();
            this.instance=new singletonDB();
        }
        return this.instance;
    }

    get connectDB():Promise<PoolConnection>{
        return singletonDB.connectDB;
    }
}