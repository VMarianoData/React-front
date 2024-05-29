//npm install axios@0.24.0

import axios from "axios";
const url = "http://localhost:8080/pesqueiros/proprietarios";
export const listaDeProprietarios = () => axios.get(url);