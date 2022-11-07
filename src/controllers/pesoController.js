import sqlite3 from "../dbStrategy/sqlite.js";

let ultimoPeso=0;

export async function getPeso(req, res) {
  try {
    
    res.send({ peso: ultimoPeso }).status(200);
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function postPeso(req, res) {
  const {peso} = req.body;
  console.log(peso);
  try {
    ultimoPeso=peso;
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
