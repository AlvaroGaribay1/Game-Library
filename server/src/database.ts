import mysql, { createPool } from 'promise-mysql';
import keys from './keys';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'iberia_db'
  });


export default pool;