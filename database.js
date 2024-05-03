import mysql from "mysql2"
import dotenv from 'dotenv'
dotenv.config();
const pool=mysql.createPool({
    // host: process.env.MYSQL_HOST,
    // user:process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database:process.env.MYSQL_DATABASE,
    host :'localhost',
    user :'root',
    password :'9505080393@Ss',
    database:'my_database',
}).promise()

export async function getUsers(){ 
const [rows]=await pool.query("SELECT * FROM users")
return rows
}

export async function getUser(id){ 
    const [rows]=await pool.query(`
    SELECT * 
    FROM users
    WHERE id=?`,[id])
    return rows[0]
    }
    export async function deleteUser(name){
        const[rows]=await pool.query(`DELETE FROM users
        WHERE name = ?`,[name])
        return rows[0]
    }

// const users = await getUser(1)
// console.log(users)
 
export async function createUser(name, email, phone, password){ 
  const [result]=  await pool.query(`INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)`, [name, email, phone, password]);
  const id =result.insertId
  return getUser(id)
    }
 
    export async function updateUser(name,email, phone, password) {
        const [rows] = await pool.query(
            `UPDATE users
             SET email = ?, phone = ?, password = ?
             WHERE name = ?`,
            [email, phone, password, name]
        );
        return rows;
    }
    // const result = await createUser('satheesh','muthyamsatheesh947@gmail.com','9505080393','@1Satheesh')
    // console.log(result)