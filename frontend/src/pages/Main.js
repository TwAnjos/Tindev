import React, { useEffect } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/tinder.svg';
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";

export default function Main( { match }){
    //o { match } é uma propriedade do react router DOM.
    // essa propriedade o "match" eu posso pegar todos os parametros que foram disponibilizados pra essa rota
    // nesse exemplo eu só tenho o _id que foi passado como parametro de login.js 

    useEffect(() => 
        {
            async function loadUser()
            {
                const response = await api.get('/devs', {
                    headers: {
                        user: match.params.id,
                    }
                });
            }
            loadUser();
        }, 
        [
            match.params.id
        ]
    )



    //Exemplo:
    // return <h1>Pagina MAIN - Exemplo: {match.params.id} </h1>
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>


            
            <ul>
                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}

                {/* PlaceHolder User */}
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>
                    <footer>
                        <strong>Nome do User</strong>
                        <p>Descrição do User</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                {/* Fim PlaceHolder User */}
            </ul>
            

            

        </div>
    )
}


