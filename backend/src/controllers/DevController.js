const axios = require('axios');
const Dev = require('../models/Dev'); //impotardo pra persistir no db

module.exports = {
    teste(req, res){
        return res.json({ ok: true});   // esse return serviu apenas para teste
    },
    async store(req, res){
        console.log("storing... "+req.body.username);

        //Desestruturação técnica : tipo {obj da classe} = classe
        const { username } = req.body;
        const testeUsername = req.body.username; //acho que tbm da pra usar assim

        // o await faz com que o node espere até que essa função retorne e exista.
        // ao utilizar o await, utilize tbm o async nesse objeto
        //const responseOfAxios = await axios.get(`https://api.github.com/users/${testeUsername}`); 
        const responseOfAxios = await axios.get(`https://api.github.com/users/${username}`); //OBS: demora um tempo pra existir

        //pegando informações da api pelo url
        const { name, bio : biography, avatar_url : avatar   } = responseOfAxios.data;
                    //"bio nick biography"
        //populando o objeto pra poder persistir
        await Dev.create({
            name,
            user : username,
            biography,
            avatar,
            //id: id
        });



        //return res.json({ ok: true});
        return res.json(responseOfAxios.data);
    }
};
//importar isso em heim routes