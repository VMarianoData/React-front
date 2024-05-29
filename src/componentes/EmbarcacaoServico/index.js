import axios from "axios";
const url = "http://localhost:8080/pesqueiros/embarcacoes";
export const listaDeEmbarcacao = () => axios.get(url);