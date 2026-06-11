import "./Personajes.css";
import imagen7 from "./imagenes/imagen7.jpg";
import imagen8 from "./imagenes/imagen8.jpg";
import imagen9 from "./imagenes/imagen9.jpg";
import imagen10 from "./imagenes/imagen10.jpg";
import imagen11 from "./imagenes/imagen11.jpg";
import imagen12 from "./imagenes/imagen12.jpg";
function Personajes() {
  return (
    <>
    <div className="padre">

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen7} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">

            <h5>Juan Lechin Oquendo</h5>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen8} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
            <h5>Cesar Lora</h5>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen9}className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
            <h5>Marcelo Quiroga Santa Cruz </h5>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen10} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
            <h5>Juan Evo Morales Ayma</h5>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen11} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
            <h5>Domitila Barrios de Chungara</h5>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={imagen12} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
            <h5>Guillermo Lora</h5>
          </p>
        </div>
      </div>

    </div>
    <div className="piedepagina"><h1 className="text-center mt-4">
  Diseñado por :Ivan  Amorin Goyzueta Paco
</h1></div>
</>

  );
}

export default Personajes;