// Importando o Express e iniciou ele em seu programa com a função express()
// e o colocou na variável app, exportando a variável app para poder usá-la
// no arquivo server.js.
const express = require('express');

const app = express();
app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/html', (req, res) => res.status(200).send('<h1>Retornando uma Menssagem HTML</h1>'));
app.get('/redirect', (req, res) => res
  .status(200).redirect('https://www.linkedin.com/in/tonistorres/'));
app.get('/index', (req, res) => res.status(200).render('index.html'));
app.get('/end', (req, res) => res.status(200).end());
module.exports = app;
