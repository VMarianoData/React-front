import ConsultaCliente from "./componentes/ConsultarCliente";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastraCliente from "./componentes/CadastrarCliente";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*//http://localhost:3000 */}
          <Route path="/" element={<ConsultaCliente />}></Route>
          {/*//http://localhost:3000/pesqueiros*/}
          <Route path="/pesqueiros/clientes" element={<ConsultaCliente />}></Route>

          <Route path="/pesqueiros/cad-cliente" element={<CadastraCliente />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;