import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listaDeEmbarcacao } from "../EmbarcacaoServico";
const ConsultaEmbarcacao = () => {
const [embarcacao, setEmbarcacao] = useState([]);
useEffect(() => {
listaDeEmbarcacao()
.then((response) => {
setEmbarcacao(response.data);
})
.catch((error) => {
console.error(error);
});
}, []);
return (
<div className="container">
<h5 className="text-center">Consulta Embarcacao </h5>
<table className="table table-striped table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Proprietario</th>
<th>Nome Embarcacao</th>
<th>arrais</th>
<th>imagem</th>
<th>capacidade</th>
</tr>
</thead>
<tbody>
{embarcacao.map((embarcacao) => (
<tr key={embarcacao.id}>
<td>{embarcacao.id}</td>
<td>{embarcacao.proprietario}</td>
<td>{embarcacao.nomeEmbarcacao}</td>
<td>{embarcacao.arrais}</td>
<td>{embarcacao.imagem}</td>
<td>{embarcacao.capacidade}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};
export default ConsultaEmbarcacao;