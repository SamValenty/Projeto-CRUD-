const express = require('express')
const app = express()
const port = 3000

//passar o caminho dos arquivos estáticos
const path = require ('path');

//disponibilizar os arquivos (origem)
app.use(express.static(path.join(__dirname, 'public')));
//chamar a conexão com o banco de dados
const db = require('./db');

app.get('/', (req, res) => {
  //res.send('Teste')
  res.sendfile(path.join(__dirname,'public', 'index.html'));
  //projeto-crud/public/index.html ==> localhost:3000/
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})