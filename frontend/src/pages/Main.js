import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    //não da pra alterar a variavel users diretamente
    //pra edirar o conteudo de users utilize o setUsers.

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

        //Like do usuário
        async function handleLike(id){
            try {
                await api.post(
                    `/devs/${id}/likes`,
                    null/*{body: objeto/variavel}Este espaço é reservado para o BODY*/,
                    {headers: { user: match.params.id}/*Este espaço é reservado para o HEADER*/});
                console.log('Like ',id);
            } catch (error) {
                alert('Erro: '+error);
            }

            //função pra atualizar a pagina depois do dislike
            //some com o item depois de clicado em like
            setUsers(users.filter(
                user => user._id !== id //
            ));
            console.log('Remove user da list' ,id);
        }

        //Dislike do usuário
        async function handleDisLike(id){
            try {
                await api.post(
                    `/devs/${id}/dislikes`,
                    null/*{body: objeto/variavel}Este espaço é reservado para o BODY*/,
                    {headers: { user: match.params.id}/*Este espaço é reservado para o HEADER*/});
                console.log('DisLike ',id);
            } catch (error) {
                alert('Erro: '+error);
            }

            //função pra atualizar a pagina depois do dislike
            //some com o item depois de clicado em dislike
            setUsers(users.filter(
                user => user._id !== id //
            ));
            console.log('Remove user of list' ,id);
        }



    //Exemplo:
    // return <h1>Pagina MAIN - Exemplo: {match.params.id} </h1>
    return (
        <div className="main-container">
            <Link to='/'>
                <img src={logo} alt="Tindev" title="Clique para voltar para a tela de Login."/>
            </Link>
            {/* if ternário */}
            { users.length > 0 ? (

                <ul>
                {/* Incluindo ´código javascritp por aqui:
                    Esse códido percorre todo o array users e imprime na tela.
                */}

                {users.map( u => (
                    /* PlaceHolder User */
                    <li key={u._id}>   {/* o Primeiro elemento do map tem que ter uma key pra ele poder identificar e renderizar o necessãrio */}
                        {/*<img src="https://avatars2.githubusercontent.com/u/34012035?v=4" alt=""/>*/}
                        <img src={u.avatar} alt={u.name}/>
                        <footer>
                            <strong>{u.name}</strong>
                            <p>{u.user}</p>
                            <p>{u.biography}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button"  onClick={ () => handleDisLike(u._id) }> {/* Tem que ser assim mesmo pro react funcionar certinho  ={()=> função(parametro)} */}
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button" onClick={ () => handleLike(u._id)} >
                                <img src={like} alt="like"/>
                            </button>
                        </div>
                    </li>
                    /* Fim PlaceHolder User */
                ))}
                </ul>
                
            ) : (
                <div className="empty"> Esperando novos participantes...</div>
            ) }
            
        </div>
    )
}

