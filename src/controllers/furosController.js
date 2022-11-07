import sqlite3 from "../dbStrategy/sqlite.js";

export async function getFuros(req, res) {
  try {
    let getQuery = 'SELECT * FROM "Furos";';

    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.send(data).status(200);
      });
    });
    
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getFuroById(req, res) {
  const { id } = req.params;
  try {
    let getQuery = `SELECT * FROM "Furos" WHERE id = ${id}`;
    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.send(data[0]).status(200);
      });
    });
    console.log(result);
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
