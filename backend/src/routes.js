const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();
/*
Metodos API server
GET:    busca alguma informação pra nossa api
POST:   salvar/CRIAR alguma informação na api
PUT:    edita ...
DELETE: deleta...
*/
//server.get('/', (req, res) => {   //assim era antes quando essa função ficava em server.js
routes.get('/teste', (req, res) => {

    let testeDeResposta = req.query.tw; // http://localhost:3333/?tw=thiago  = "Hello World thiago"
    //return res.send('Hello World\n'+testeDeResposta); // teste basico
    //return res.send(`Hello Word ${req.query.tw}`); //opção 2
    //return res.send(`Hello Word ${testeDeResposta}`); //opção 3
    return res.json({ mensagem: `Olá ${req.query.qqcoisa+'\n '+testeDeResposta}`});   //assim retorna com o formato json como uma API deve retornar

}); //requisições para a pasta raiz do projeto

//exemplo POST
//PS. Utilizei um programa chamado Insomnia REST Client pra fazer testes de requisições post.

/* função para teste
será utilizada uma função post semelhante que, que vai incorporar o DevController, logo abaixo
routes.post('/devs',(req, res) => {
    console.log(req.body);
    //return res.json({"teste txt": "teste"});
    return res.json(req.body);
});*/
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;    // para fazer com que o conteudo fique visivel 
// pra chamaer esse cara em server.js use const routes = require('./routes');
// . "ponto" para indicar a própria pasta