import mariadb from 'mariadb';

export function getMysqlConfiguration() { 
  return {
    host: '143.244.169.216',
    user: 'usr_reviews_server',
    password: 'd34j08$hf.3De88$34f',
    port: 3306,
    database: 'bd_otc_reviews',
    connectionLimit: 5
  };
}
export async function getDatabaseConnection() {
  const pool = mariadb.createPool(getMysqlConfiguration());
  const dbConnection = await pool.getConnection();
  return dbConnection;
}
