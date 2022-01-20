import keys from './keys';
import mysql from 'mysql';

const pool = mysql.createPool(keys.database);

const connect = mysql.createConnection(keys.database)

console.log(connect.state);

export default pool;