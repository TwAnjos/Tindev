//sempre importar o react
import React from 'react';
import './Login.css';   //não preciso informar uma variavel se não precisar tratar dela

import logodotinder from '../assets/tinder.svg';

//opção 2 simplificado
export default function Login(){
    return (
        <img src={logodotinder} alt="Tinder Logo"/>
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