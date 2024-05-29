import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Footer/styles.css";
import { listaDeProprietarios } from "../ProprietarioServico";
const ProprietarioConsulta = () => {
const [proprietarios, setProprietarios] = useState([]);
useEffect(() => {
listaDeProprietarios()
.then((response) => {
setProprietarios(response.data);
})
.catch((error) => {
console.error(error);
});
}, []);
return (
<div className="container">
<h5 className="text-center">Consulta Proprietario </h5>
<table className="table table-striped table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>CPF</th>
<th>Email</th>
<th>Senha</th>
<th>NrTelefone</th>
</tr>
</thead>
<tbody>
{proprietarios.map((proprietario) => (
<tr key={proprietario.id}>
<td>{proprietario.id}</td>
<td >{proprietario.nome}</td>
<td>{proprietario.cpf}</td>
<td>{proprietario.email}</td>
<td>{proprietario.senha}</td>
<td>{proprietario.NrTelefone}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};
export default ProprietarioConsulta;