const Dev = require('../models/Dev');

//copia do LikeController
module.exports = {
    async store(req, res){
        console.log('dentro de devID = '+req.params.devId);
        console.log('dentro do headers = '+req.headers.user);

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({ error: 'Dev não existe'});
        }

        loggedDev.dislikes.push(targetDev._id);
        
        await loggedDev.save();
        
        return res.json({ loggedDev });
    }
};
