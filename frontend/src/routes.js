import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';  // coloquei esse cara do diretório raiz na barra de endeços do navegador
import Main from './pages/Main';

export default function Routes(){
    return (
        //conteudo JSX = java script dentro do html
        <BrowserRouter>

            
            <Route path="/" component={Login}  />
        </BrowserRouter>
    );
}


