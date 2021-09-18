export const NormalizeInfo = (data) => {
  switch (Object.keys(data)[0]) {
    case "general":
      const { nombre, ubicacion, estudios, orientacion_IT } = data.general;
      return (
        <>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-user p-3 "></i>
            </span>{" "}
            {nombre}
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-home p-3"></i>
            </span>{" "}
            Vive en {ubicacion}
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-graduation-cap p-3"></i>
            </span>{" "}
            {orientacion_IT}
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-graduation-cap p-3"></i>
            </span>
            {estudios}
          </h5>
        </>
      );
    case "estudios":
      const { punchIt, direccion, Otros } = data.estudios;

      return (
        <>
          <h5 className="mt-2">
            <span className="m-1">
              <i className="fas fa-university p-3 "></i>
            </span>
            {
              <a href={direccion} target="_blank" rel="noreferrer">
                Punch-IT
              </a>
            }
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-graduation-cap p-3 "></i>
            </span>
            PunchIt - {punchIt[0]}
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-graduation-cap p-3 "></i>
            </span>
            PunchIt - {punchIt[1]}
          </h5>
          <h5 className="mt-2">
            <span className="m-1">
              <i className="fas fa-plus p-3"></i>
            </span>
            {Otros}
          </h5>
        </>
      );
    case "hobbies":
      const [fut, series] = data.hobbies;
      return (
        <>
          <h5 className="mt-2">
            <span>
              <i className="far fa-futbol p-3 "></i>
            </span>
            Jugar y ver {fut}🏃‍♂️
          </h5>
          <h5 className="mt-2">
            <span>
              <i className="fas fa-film p-3 "></i>
            </span>
            {series} 👀 Attack of titans, One piece, Breaking bad, Game of
            Thrones, etc{" "}
          </h5>
        </>
      );

    default:
      break;
  }
};
