import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
    cadastrarClientes,
    clientePorId,
    atualizarCliente, 
} from "../ClienteServico";


function CadastrarClientes() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nrTelefone, setNrTelefone] = useState("");
  const { id } = useParams();

  const [mensagem, setMensagem] = useState("");
  const navigator = useNavigate();


  useEffect(() => {
    if (id) {
      cadastrarClientes(id)
        .then((response) => {
          setNome(response.data.nome);
          setCpf(response.data.cpf);
          setEmail(response.data.email);
          setSenha(response.data.senha);
          setNrTelefone(response.data.nrTelefone);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }, [id]);


  function manipulaNome(event) {
    setNome(event.target.value);
  }

  function manipulaCpf(event) {
    setCpf(event.target.value);
  }

  function manipulaEmail(event) {
    setEmail(event.target.value);
  }

  function manipulaSenha(event) {
    setSenha(event.target.value);
  }

  function manipulaNrTelefone(event) {
    setNrTelefone(event.target.value);
  }

  function pageTitle() {
    if (id) {
        return <h2 className="text-center">Atualizar Cliente</h2>;
    } else {
        return <h2 className="text-center">Cadastrar Cliente</h2>;
    }
  }


  function salvarCliente(event) {
    event.preventDefault();
    const cliente = {
        nome, cpf, email, senha, nrTelefone
    };
    console.log(cliente);

    if (id) {

        atualizarCliente(id, cliente).then((response) => {
            console.log(response);

            // Revisar depois
            navigator("/pesqueiros/clientes");
        })
        .catch((error) => {
            console.error(error);
        
        });
    } else {
        cadastrarClientes(cliente)
        .then((response) => {
            console.log(response.data);
            setMensagem(response.data);

            // Revisar depois
            navigator("/pesqueiros/clientes");
        })
        .catch((error) => {
            console.error("Erro ao cadastrar cliente", error);
            setMensagem("Erro ao cadastrar cliente. Por favor, tente novamente.");
        })
    }
  }


  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          {pageTitle()}
  
          <div className="card-body">
            {mensagem && <div className="alert alert-success">{mensagem}</div>}
            <form>

              <div className="form-group mb-2">
                <label className="form-label">Nome:</label>
                <input
                  type="text"
                  placeholder="Nome"
                  name="nome"
                  value={nome}
                  className="form-control"
                  readOnly
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">CPF:</label>
                <input
                  type="text"
                  placeholder="CPF"
                  name="cpf"
                  value={cpf}
                  className="form-control"
                  readOnly
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  className="form-control"
                  readOnly
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Senha:</label>
                <input
                  type="text"
                  placeholder="Senha"
                  name="senha"
                  value={senha}
                  className="form-control"
                  readOnly
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Número de Telefone:</label>
                <input
                  type="text"
                  placeholder="Número de Telefone"
                  name="nrTelefone"
                  value={nrTelefone}
                  className="form-control"
                  readOnly
                ></input>
              </div>

              <button className="btn btn-success" onClick={salvarCliente}>
                Submit(" ")
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarClientes;