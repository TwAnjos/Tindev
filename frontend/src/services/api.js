import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost:3000'
//esse endereço deve ser alterado manualmente quando o servidor mudar de local
});

export default api;