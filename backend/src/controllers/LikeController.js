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
            return res.status(400).json({ error: 'Dev não existe'});
        }

        return res.json({ ok: true });
    }
};
