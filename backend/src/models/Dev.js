const { Schema, model } = require('mongoose');  //importação de elementos contidos dentro do mongoose.

//isso será o nosso db
const DevSchema = new Schema({  //Schema importado do mongoose
    name: {     //   parametro
        type: String,   // tipo do obj
        required: true,  //indica valor obrigatório.
    },
    user:{
        type: String,
        required:true,
    },
    biography: String,  //desta maneira indica que a variavel biography pode ser nullo ou vazio.
    avatar:{
        type: String, //não é uma imagem, é só um link da imagem do avatar dentro do github, que faz parte do negócio desse projeto.
        required: true,
    }
},{
    timestamps:true,
});

module.exports = model('Dev', DevSchema);   //model importado do mongoose tbm