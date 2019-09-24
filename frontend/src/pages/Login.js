//sempre importar o react
//import React from 'react';
import React, {useState} from 'react';

import './Login.css';   //não preciso informar uma variavel se não precisar tratar dela

import logodotinder from '../assets/tinder.svg';

import api from '../services/api';

//opção 2 simplificado
export default function Login( { history }){  //history sempre é herdado automaticamente

    //pegando a informação do input ali em baixo
    // o campo vazio ('') é pq não existe um valor padrão, o valor está em branco para o usuário definir.
    //o username deve ser chamado quando precisar acessar o valor de username
    //o setUsername deve ser utilizado quando precisar modificar o conteudo de user name;
    const [username, setUsername] = useState('');

    /*função para testar
    function handleSubmit(event){
        event.preventDefault();
        console.log(username);
        console.log("History = "+history.value);
        history.push('/main'); // esse cara aqui faz o redirecionamento pra qualquer pagina /main 
    }
    */

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('/devs',
        {
            //username : username //deveria ser assim, mas é permitido fazer isso tbm como short sitanx ja que possuem os mesmos nomes.
            username,
        });

        const { _id } = response.data

        console.log(username);
        console.log(response);
        console.log("History = "+history.value);
        //history.push('/main'); // esse cara aqui faz o redirecionamento pra qualquer pagina /main 
        history.push(`/dev/${_id}`);
    }



    return (
        <div className="login-container">
            <form 
            name="formLogin"
            onSubmit={handleSubmit} //onSubmit aqui foi pra testar tbm  
            > 
                <img src={logodotinder} alt="Tinder Logo"/>

                <input 
                placeholder="Digite seu usuário no Github"
                value={username}
                onChange={ fEvent => setUsername(fEvent.target.value)} // o onChange do html retorna um evento então é necessário uma função pra retonar o conteudo do evento. fEvent = function event()...
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

/* opção 1
function Login(){
    return (
        <img src={logodotinder} alt="Tinder Logo"/>
    );
}

export default Login;
*/


/* só pra comparação, não sei se funcionaria minha função normal ali rrsrs
fEvent => setUsername(fEvent.target.value)
igual:
setUsername = function fEvent(){
    return this.target.value
}

*/