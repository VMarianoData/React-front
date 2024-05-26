import axios from "axios";

// Configuração da URL do Backend
const url = "http://localhost:8080/pesqueiros/clientes";

// Get
export const listaDeClientes = () => axios.get(url);

// Get by ID
export const clientePorId = (id) => axios.get(url + '/' + id)

// Post
export const cadastrarClientes = () => axios.post(url);

// Put
export const atualizarCliente = (id, cliente) => axios.put(url + '/' + id, cliente);

// Delete
export const deletarCliente = (id) => axios.delete(url + '/' + id);