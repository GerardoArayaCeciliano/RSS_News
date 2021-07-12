import mariadb from 'mariadb';
export function getMysqlConfiguration() { 
  return {
    host: '127.0.0.1',
    user: 'root',
    password: 'una',
    port: 3307,
    database: 'bd_new',
    connectionLimit: 5
  };
}
export async function getDatabaseConnection() {
  const pool = mariadb.createPool(getMysqlConfiguration());
  const dbConnection = await pool.getConnection();
  return dbConnection;
}
