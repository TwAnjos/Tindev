import React from 'react';
import logo from '../assets/tinder.svg';

export default function Main( { match }){
    //o { match } é uma propriedade do react router DOM.
    // essa propriedade o "match" eu posso pegar todos os parametros que foram disponibilizados pra essa rota
    // nesse exemplo eu só tenho o _id que foi passado como parametro de login.js 

    //Exemplo:
    // return <h1>Pagina MAIN - Exemplo: {match.params.id} </h1>
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>

            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Tw Thiago</strong>
                        <p> Teste de conta </p>
                    </footer>
                </li>
            </ul>

        </div>
    )
}


