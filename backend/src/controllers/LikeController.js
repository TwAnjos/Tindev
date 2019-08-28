const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        //exemplo de como pegar o valor do parametro
        console.log('dentro de devID = '+req.params.devId);
        console.log('dentro do headers = '+req.headers.user);

        //
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            //apresenta um erro caso não encontre nenhum DEV cadastrado na db
            return res.status(400).json({ error: 'Dev não existe'});
        }//seria legal um else aqui tbm, mas como o java scrip interrompe a leitura no return vai assim mesmo.

        //verificação do match:
        //se dentro do likes em targerdev ja estiver um id desse loggeddev da match
        if(targetDev.likes.includes(loggedDev._id)){
            console.log('DEU MATCH');
        }



        //o push serve para add uma informação nova dentro de um array.
        //O likes foi criado como um array la em Dev.js
        loggedDev.likes.push(targetDev._id);    //o _id  é a forma que o mongodb salva o id na db
        //o push não salva no db
        //para salvar no db faça:
        await loggedDev.save();



        //return res.json({ ok: true });
        return res.json({ loggedDev });
    }
};
