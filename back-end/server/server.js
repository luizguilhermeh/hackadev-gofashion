const { Router } = require("express");
const express = require("express");
const server = express();
const port = 80;


server.use('/', require('./route/produtosRoute'));

server.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});


