import ConsultaCliente from "./componentes/ConsultarCliente";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import CadastrarClientes from "./componentes/CadastrarCliente";
import ProprietarioConsulta from "./componentes/ProprietarioConsulta";
import ConsultaEmbarcacao from './componentes/ConsultaEmbarcacao';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          {/* http://localhost:3000 */}
          <Route 
            path="/"
            element={<ConsultaCliente />}
           ></Route>

          {/* http://localhost:3000/pesqueiros/clientes */}
          <Route 
            path="/clientes" 
            element={<ConsultaCliente />}
          ></Route>

          {/* http://localhost:3000/pesqueiros/cad-cliente */}
          <Route 
            path="/cad-cliente" 
            element={<CadastrarClientes />}
          ></Route>

          {/* http://localhost:3000/pesqueiros/edit-cliente */}
          <Route 
            path="/edit-cliente/:id" 
            element={<CadastrarClientes />} 
          ></Route>

          {/*//http://localhost:8080/pesqueiros/proprietarios*/}
          <Route 
            path="/proprietarios" 
            element={<ProprietarioConsulta />}
          ></Route>

          {/*//http://localhost:8080/pesqueiros/embarcacoes*/}
          <Route 
            path="/embarcacoes" 
            element={<ConsultaEmbarcacao/>}
          ></Route>

        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;