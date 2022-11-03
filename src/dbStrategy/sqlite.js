import dotenv from "dotenv";

dotenv.config();

import sqlite3 from "sqlite3";

// Connecting Database
let db = new sqlite3.Database("c:/dados/OreDataDB.db",sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log("Error Occurred - " + err.message);
  } else {
    console.log("DataBase Connected");
  }
});
// db.serialize(() => {
//     db.each(`SELECT *
//              FROM "Furos";`, (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(row);
//     });
//   });
// const { Pool } = pg;

// let databaseConfig;

// if(process.env.MODE=="heroku"){
//     databaseConfig = {
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// }else if(process.env.MODE=="local"){
//     databaseConfig = {

//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '123',
//         database: 'la_boleria'
//     }
// }else{
//     databaseConfig = {

//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '123',
//         database: 'la_boleria'
//     }
// }

//const connection = new Pool(databaseConfig);

export default db;
