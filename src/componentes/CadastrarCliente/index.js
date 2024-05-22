import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { cadastrarClientes, listaDeClientes } from "../ClienteServico";
const CadastraCliente = () => {
    const [clientes, setCliente] = useState([]);
    useEffect(() => {
        cadastrarClientes()
            .then((response) => {
                setCliente(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="container">
            <h5 className="text-center">Consulta clientes</h5>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Número de Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td >{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.senha}</td>
                            <td>{cliente.nrTelefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CadastraCliente;