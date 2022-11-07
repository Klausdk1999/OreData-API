import sqlite3 from "../dbStrategy/sqlite.js";

export async function getAmostras(req, res) {
  const { idFuro } = req.params;
  try {
    let getQuery = `SELECT * FROM "Amostras" WHERE idFuro = ${idFuro}`;

    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.send(data).status(200);
      });
    });
    console.log(result);
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getAmostraById(req, res) {
  const { idFuro, idAmostra } = req.params;
  try {
    let getQuery = `SELECT * FROM "Amostras" WHERE idFuro = ${idFuro} AND id = ${idAmostra}`;
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

export async function createAmostra(req, res) {
  const {
    idFuro,
    idUsuario,
    intervaloInicio,
    intervaloFim,
    pesoA,
    pesoB,
    pesoC,
    pesoD,
    pesoTotal,
    dataUpdate,
    agua,
    ar,
    observacao,
  } = req.body;
  try {
    let getQuery = `INSERT INTO "Amostras" (idFuro,idUsuario,intervaloInicio,intervaloFim,pesoA,pesoB,pesoC,pesoD,pesoTotal,dataUpdate,agua,ar,observacao)
     VALUES (${idFuro},${idUsuario},${intervaloInicio},${intervaloFim},${pesoA},${pesoB},${pesoC},${pesoD},${pesoTotal},${dataUpdate},${agua},${ar},${observacao})`;
    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.sendStatus(201);
      });
    });
    console.log(result);
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateAmostraById(req, res) {
  const { idFuro, idAmostra } = req.params;
  try {
    let getQuery = `UPDATE "Amostras" SET param = value, param1 = value1 WHERE idFuro = ${idFuro} AND id = ${idAmostra}`;
    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.sendStatus(200);
      });
    });
    console.log(result);
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteAmostraById(req, res) {
  const { idFuro, idAmostra } = req.params;
  try {
    let getQuery = `DELETE * FROM "Amostras" WHERE idFuro = ${idFuro} AND id = ${idAmostra}`;
    const result = await sqlite3.serialize(() => {
      sqlite3.all(getQuery, (err, data) => {
        if (err) {
          console.error(err.message);
        }

        res.send("Deleted").status(200);
      });
    });
    console.log(result);
    // res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
