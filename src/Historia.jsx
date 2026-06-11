import imagen14 from"./imagenes/imagen14.jpg"
function Historia() {
  return (
    <>
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Historia del Día del Trabajador Boliviano
      </h1>

      {/* BLOQUE PRINCIPAL */}
      <div className="row align-items-center">

        {/* TEXTO IZQUIERDA */}
        <div className="col-md-6">
          <h3>Origen del Día del Trabajador</h3>

          <p>
          El Día del Trabajador en Bolivia se celebra cada 1 de mayo en homenaje a la lucha de los trabajadores por mejores condiciones laborales. Su origen está relacionado con los movimientos obreros internacionales del siglo XIX, especialmente la exigencia de la jornada laboral de 8 horas.

En Bolivia, las primeras celebraciones comenzaron a inicios del siglo XX, cuando los obreros empezaron a organizarse y realizar marchas en la ciudad de La Paz. Con el tiempo, el movimiento sindical tomó fuerza, especialmente con la creación de la Central Obrera Boliviana (COB) en 1952.

Actualmente, el 1 de mayo es un feriado nacional, donde se realizan actos, marchas y discursos en reconocimiento a los derechos de los trabajadores y su aporte al desarrollo del país.
          </p>
        </div>

        {/* IMAGEN DERECHA */}
        <div className="col-md-6 text-center">
          <img
            src={imagen14}
            alt="Historia trabajadores"
            className="img-fluid rounded"
            style={{ maxHeight: "350px" }}
          />
        </div>

      </div>

    </div>
     <div className="piedepagina"><h1 className="text-center mt-4">
  Diseñado por :Ivan  Amorin Goyzueta Paco
</h1></div>
    </>
  );
}

export default Historia;