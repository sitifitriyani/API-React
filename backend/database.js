//============= Cara 1 menggunakan Database mariaDB =====================
// import mariadb from "mariadb"
import dotenv from "dotenv"
dotenv.config()

// export const connection = await mariadb.createConnection({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     database:process.env.DB_NAME,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD 
// })


//============= Cara 2 menggunakan Database postgres =====================
import pkg from "pg";
 const {Pool} = pkg;

 export const connection = new Pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
 });

connection.connect().than(()=>console.log("successfully connected to the database"))
