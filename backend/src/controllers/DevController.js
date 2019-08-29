//Boas praticas
// 5 METODOS FUNDAMENTAIS 
// maximo de metodos dentro de um controle são:
//INDEX: lista do recurso.
//SHOW: retorno único de recurso.
//STORE:
//DELETE:

const axios = require('axios');
const Dev = require('../models/Dev'); //impotardo pra persistir no db

module.exports = {

    //Metodo index para listagens
    //trazer usuários do db 
    async index(req, res){
        var data = new Date();
        console.log("Listando Devs "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+","+data.getMilliseconds());
        //primeiro pegar usuário logado
        const { user } = req.headers;   //id do usuário loggado
        const  loggedDev = await Dev.findById(user); //tenho todos os dados que estavam salvo no db do meu usuário logado

        //buscar no db todos os usuários que:
        // não são estão logado
        // não é usuário que o logado ja deu like
        // não é usuário que o logado ja deu dislike
        const users = await Dev.find({ //add todos os filtros aqui...
            //filtro AND, ou seja tem que ter os 3 filtros verdadeiros
            $and: [ //dentro do mongo
                { _id: { $ne: user } }, //$ne = not equal = !=
                { _id: { $nin: loggedDev.likes } }, // $nin = not in = não ta na lista
                { _id: { $nin: loggedDev.dislikes } }, // tras os user que não estão na lista
            ],
        });
        data = new Date();
        console.log("Devs Listado "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+","+data.getMilliseconds());
        return res.json(users);
    },


    //esse metodo serviu apenas para teste mesmo
    teste(req, res){
        return res.json({ ok: true});   // esse return serviu apenas para teste
    },


    async store(req, res){
        console.log("storing... "+req.body.username);

        //Desestruturação técnica : tipo {obj da classe} = classe
        const { username } = req.body;
        const testeUsername = req.body.username; //acho que tbm da pra usar assim


        //verificar se o usuário existe na base antes de salvar.
        //                     procura um user que seja igual a username
        const userExists = await Dev.findOne({ user : username});
        if(userExists)
        {
            console.log("Usuário ja existia na DB\nNão foi necessário salvar...");
            return res.json(userExists);
        }
        // não precisa fazer else nesse caso.
        // teoricamente o js não executa mais após o return
        // nesse caso se esse if for verdadeiro ele não passara daqui.

        // o await faz com que o node espere até que essa função retorne e exista.
        // ao utilizar o await, utilize tbm o async nesse objeto
        //const responseOfAxios = await axios.get(`https://api.github.com/users/${testeUsername}`); 
        const responseOfAxios = await axios.get(`https://api.github.com/users/${username}`); //OBS: demora um tempo pra existir
        console.log(`https://api.github.com/users/${username}`);

        //pegando informações da api pelo url
        const { name, bio : biography, avatar_url : avatar   } = responseOfAxios.data;
                    //"bio nick biography"
        //populando o objeto pra poder persistir
        const dev = await Dev.create({
            name,
            user : username,
            biography,
            avatar,
            //id: id
        });

        //return res.json({ ok: true}); teste1
        //return res.json(responseOfAxios.data); teste2
        return res.json(dev);
    }
};
//importar isso em heim routes