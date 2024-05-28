import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { listaDeClientes } from "../ClienteServico";
import { useNavigate } from "react-router-dom";


const ConsultaCliente = () => {
    const [clientes, setCliente] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listaDeClientes()
            .then((response) => {
                setCliente(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function cadastrarCliente() {
        navigator("/cad-cliente");
    }

    function atualizarCliente(id) {
        navigator(`/edit-cliente/${id}`);
    }

    return (
        <div className="container">
            <h5 className="text-center">Consulta clientes</h5>
            <button className="btn btn-primary bm-2" onClick={cadastrarCliente} >
                Cadastrar Cliente
            </button>
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
                <tbody className="Clientes">
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td >{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.senha}</td>
                            <td>{cliente.nrTelefone}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => atualizarCliente(cliente.id)}>
                                    Atualizar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ConsultaCliente;