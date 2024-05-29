import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { listaDeClientes, deletarCliente } from "../ClienteServico";
import { useNavigate } from "react-router-dom";


const ConsultaCliente = () => {
    const [clientes, setCliente] = useState([]);
    const navigator = useNavigate();
    const [mensagem, setMensagem] = useState("")


    useEffect(() => {
        listaDeClientes()
            .then((response) => {
                setCliente(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function ConsultarProprietario() {
        navigator("/proprietarios")
    }

    function ConsultarEmbarcacao() {
        navigator("/embarcacoes")
    }

    function cadastrarCliente() {
        navigator("/cad-cliente");
    }

    function atualizarCliente(id) {
        navigator(`/edit-cliente/${id}`);
    }

    function exclusaoCliente(id) {
        console.log("Exclusão de Cliente por ID=", id)
        deletarCliente(id).then((response) => {
            getAllClientes();
        })
        .catch((error) => {
            console.error(error);
            setMensagem("Ocorreu um erro na exclusão de cliente.");
        });
    }

    function getAllClientes() {
        listaDeClientes()
        .then((response) => {
            setCliente(response.data);
        })
        .catch((error) => {
            console.error(error);
            setMensagem("Ocorreu um erro na consulta de informações de cliente.");
        })
    }

    return (
        <div className="container">
            <h5 className="text-center">Consulta clientes</h5>
            <button className="btn btn-primary bm-2" onClick={cadastrarCliente} >
                Cadastrar Cliente
            </button>

            <button className="btn btn-primary bm-2" onClick={ConsultarProprietario} >
                Consultar proprietarios
            </button>

            <button className="btn btn-primary bm-2" onClick={ConsultarEmbarcacao} >
                Consultar Embarcação
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
                    {mensagem && <div className="alert alert-success">{mensagem}</div>}{" "}
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

                                <button className="btn btn-danger"
                                onClick={() => exclusaoCliente(cliente.id)}
                                style={{marginLeft: "10px"}}
                                >
                                    Excluir
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