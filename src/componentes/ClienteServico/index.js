import axios from "axios";
const url = "http://localhost:8080/pesqueiros/clientes";
export const listaDeClientes = () => axios.get(url);
export const cadastrarClientes = () => axios.post(url);