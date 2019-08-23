const express = require('express'); //importando o express

const mongoose = require('mongoose'); // "yarn add mongoose" esse cara permite fazer query no db com sintaxe javascript

const routes = require('./routes'); //importa tudo que eu criei no arquivo routes.js

const server = express(); // cria um servidor do express

                              // LOGIN    :  SENHA   @...
mongoose.connect('mongodb+srv://contateste:contateste@twdb-5oztg.mongodb.net/twdb001?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(express.json()); // informa ao Express que ele precisa tratar as requisições POST com JSON
server.use(routes); // o use serve pra indicar que vc quer usar uma outra configuração, nesse caso de routas que está no arquivo de routes.js

server.listen(3333); // permite que o servidor aceito requisições no navegador com "localhost:3333"

// Arquitetura MVC
// M - Model (Abstração da estrutura do db)
// V - View (Nesse caso como é API a view é considerada a FRONTEND em react.)
// C - Control - Regras de negócio persistencia em db


