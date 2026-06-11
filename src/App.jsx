import { Routes, Route, Link } from "react-router-dom";

import Bienvenida from "./Bienvenida";
import Historia from "./Historia";
import Personajes from "./Personajes";
import Feriado from "./Feriado";

function App() {
  return (
    <>
      <h1 className="text-center mt-4">
        Dia del trabajador boliviano
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <h4>Bienvenida</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/historia">
                  <h4>Historia</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/personajes">
                  <h4>Personajes</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/feriado">
                  <h4>Feriado</h4>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/feriado" element={<Feriado />} />
      </Routes>
    </>
  );
}

export default App;