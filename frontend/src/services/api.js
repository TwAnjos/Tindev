import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost:3333'
//esse endereço deve ser alterado manualmente quando o servidor mudar de local
//esse cara tem que ter a mesma porta dp server api pra ele poder fazer as chamadas.
//
});

export default api;