import React from 'react'; //sem essa linha da erro: 'React' must be in scope when using JSX  react/react-in-jsx-scope
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';  // coloquei esse cara do diretório raiz na barra de endeços do navegador
import Main from './pages/Main';

export default function Routes(){
    return (
        //conteudo JSX = java script dentro do html
        // o exact serva para fazer com que o react não compare somente o primeiro caracteres em relação a barra de endereços.
        <BrowserRouter>
            <Route path="/" exact component={Login}  /> 
            <Route path="/main" component={Main}  />
        </BrowserRouter>
    );
}


