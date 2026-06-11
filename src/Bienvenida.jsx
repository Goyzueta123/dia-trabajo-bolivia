import "./Bienvenida.css";
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/imagen2.webp";
import imagen3 from "./imagenes/imagen3.webp";
import imagen4 from "./imagenes/imagen4.jpg";
import imagen5 from "./imagenes/imagen5.webp";
import imagen6 from "./imagenes/imagen6.jpg";
function Bienvenida() {
  return (
    <>
      <div className="padre">

        <div className="contenido1">
          <h2>Profesion</h2>

          <div id="carouselProfesion" className="carousel slide">
            <div className="carousel-inner">

  <div className="carousel-item active">
    <img src={imagen1} className="d-block w-100  " alt="Profesion 1"  height="400px" width="200px"/>
  </div>

  <div className="carousel-item">
    <img src={imagen2} className="d-block w-100" alt="Profesion 2" height="400px" width="200px"/>
  </div>

  <div className="carousel-item">
    <img src={imagen3} className="d-block w-100" alt="Profesion 3" height="400px" width="200px"/>
  </div>

</div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselProfesion"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselProfesion"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="contenido2">
          <h2>Oficio</h2>

          <div id="carouselOficio" className="carousel slide">
            <div className="carousel-inner">

  <div className="carousel-item active">
    <img src={imagen4} className="d-block w-100" alt="Oficio 1"  height="400px" width="200px"/>
  </div>

  <div className="carousel-item">
    <img src={imagen5} className="d-block w-100" alt="Oficio 2"  height="400px" width="200px"/>
  </div>

  <div className="carousel-item">
    <img src={imagen6} className="d-block w-100" alt="Oficio 3"  height="400px" width="200px"/>
  </div>

</div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselOficio"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselOficio"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>

      </div>
      <div className="piedepagina"><h1 className="text-center mt-4">
  Diseñado por :Ivan  Amorin Goyzueta Paco
</h1></div>
    </>
  );
}

export default Bienvenida;