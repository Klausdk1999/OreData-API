import sqlite3 from "../dbStrategy/sqlite.js";

let ultimoPeso;

export async function getPeso(req, res) {
  try {
    
    res.send({ peso: ultimoPeso }).status(200);
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function postPeso(req, res) {
  const peso = req.params.peso;
  console.log(req.params)
  console.log(peso);
  try {
    ultimoPeso=peso;
    res.send(ultimoPeso).status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
