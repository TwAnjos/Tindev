import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/tinder.svg';
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";

export default function Main( { match }){
    //o { match } é uma propriedade do react router DOM.
    // essa propriedade o "match" eu posso pegar todos os parametros que foram disponibilizados pra essa rota
    // nesse exemplo eu só tenho o _id que foi passado como parametro de login.js 


    //cadastrando o estado:
    const [users, setUsers] = useState([]);


    //faz a chamada da api
    useEffect(() => 
        {
            async function loadUser()
            {
                const response = await api.get('/devs', {
                    headers: {
                        user: match.params.id,
                    }
                })
                console.log(response);
                setUsers(response.data);
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
                {/* Incluindo ´código javascritp por aqui:
                Esse códido percorre todo o array users e imprime na tela.
                */}
                {users.map( u => (
                    /* PlaceHolder User */
                    <li key={u._id}>
                        {/*<img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>*/}
                        <img src={u.avatar} alt={u.name}/>
                        <footer>
                            <strong>{u.name}</strong>
                            <p>{u.biography}</p>
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
                    /* Fim PlaceHolder User */
                ))}

            </ul>
            
        </div>
    )
}


