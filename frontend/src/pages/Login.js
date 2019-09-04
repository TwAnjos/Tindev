//sempre importar o react
import React from 'react';
import './Login.css';   //não preciso informar uma variavel se não precisar tratar dela

import logodotinder from '../assets/tinder.svg';

//opção 2 simplificado
export default function Login(){
    return (
        <div className="login-container">
            <form>
                <img src={logodotinder} alt="Tinder Logo"/>
                <input placeholder="Digite seu usuário no Github"/>
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