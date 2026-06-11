import imagen13 from"./imagenes/imagen13.jpg"
function Feriado() {
  return (
    <>
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Feriado del Día del Trabajador en Bolivia
      </h1>

      <div className="card">
        <div className="card-body">

          <p>
            En Bolivia, el Día del Trabajador se celebra cada <b>1 de mayo</b>
            y es considerado un feriado nacional.
          </p>

          <p>
            Este día se otorga descanso a todos los trabajadores del país
            en reconocimiento a su esfuerzo y aporte al desarrollo económico y social.
          </p>

          <p>
            Durante esta fecha, se realizan actos sindicales, marchas y actividades
            en defensa de los derechos laborales.
          </p>

        </div>
      </div>

      <div className="text-center mt-4">
        <img
          src={imagen13}
          alt="Feriado 1 de mayo"
          className="img-fluid rounded"
          style={{ maxHeight: "400px" }}
        />
      </div>

    </div>
    <div className="piedepagina"><h1 className="text-center mt-4">
  Diseñado por :Ivan  Amorin Goyzueta Paco
</h1></div>
    </>
  );
}

export default Feriado;