# OreData API

- **GET** `/furos`
  - Retorna as informações de todos os furos.
  
    Exemplo de retorno:
  ```json
  [
    {
      "id": 60,
      "numeroControle": 140924,
      "numero": "FNO-RC00015",
      "cliente": "VALE",
      "projeto": "Fábrica Nova",
      "sonda": "RC 01",
      "profundidade": 100,
      "inclinacao": 90,
      "diametro": 0,
      "dataInicio": "2022-08-09 10:46:55",
      "tipoSonda": "Retropercursiva",
      "sistemaPerfuracao": "Ar Comprimido",
      "cicloLimpeza": "NENHUM",
      "intervaloPerfuracao": 1,
      "impressaoA": 1,
      "impressaoB": 1,
      "impressaoC": 0,
      "impressaoD": 0,
      "capturarA": 1,
      "capturarB": 1,
      "capturarC": 0,
      "capturarD": 1,
      "dataFim": "2022-10-19 20:26:44"
    }
  ]
  ```
- **GET** `/furos/:id`
  - Retorna as infromações do furo com id especificado no parametro de rota
  ```json
  {
    "id": 60,
    "numeroControle": 140924,
    "numero": "FNO-RC00015",
    "cliente": "VALE",
    "projeto": "Fábrica Nova",
    "sonda": "RC 01",
    "profundidade": 100,
    "inclinacao": 90,
    "diametro": 0,
    "dataInicio": "2022-08-09 10:46:55",
    "tipoSonda": "Retropercursiva",
    "sistemaPerfuracao": "Ar Comprimido",
    "cicloLimpeza": "NENHUM",
    "intervaloPerfuracao": 1,
    "impressaoA": 1,
    "impressaoB": 1,
    "impressaoC": 0,
    "impressaoD": 0,
    "capturarA": 1,
    "capturarB": 1,
    "capturarC": 0,
    "capturarD": 1,
    "dataFim": "2022-10-19 20:26:44"
  }
  ```
- **GET** `/peso`

  - Retorna o último peso recebido da balança

  ```json
     0,155

  ```

- **POST** `/peso/:pesagem`

  - Rota para envio do peso da balança
    Recebe como resposta o peso enviado e status 205:

  ```json
     0,155

  ```
