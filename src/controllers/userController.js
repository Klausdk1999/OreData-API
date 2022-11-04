import sqlite3 from "../dbStrategy/sqlite.js";

export async function singIn(req, res) {
   try{
        const { login, senha } = req.body;
    
        let getQuery = `SELECT * FROM "Usuarios" WHERE login = ${login} AND senha = ${senha};`;

        await sqlite3.serialize(() => {
          sqlite3.all(getQuery, (err, data) => {
            if (err) {
              res.sendStatus(401);
            }
            console.log(data);
            if(data){
                res.sendStatus(200);
            }
            
          });
        });
          
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
  