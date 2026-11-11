function DatosLocales() {
  // Datos locales (array de objetos) con título, descripción e imagen.
  const elementosLocales = [
    {
      id: 1,
      titulo: 'Diseño Gráfico',
      descripcion: 'Creación de flyers y logos para redes sociales.',
      imagen: 'https://picsum.photos/id/0/400/250',
    },
    {
      id: 2,
      titulo: 'Desarrollo Web',
      descripcion: 'Programación de sitios web con React.',
      imagen: 'https://picsum.photos/id/1/400/250',
    },
    {
      id: 3,
      titulo: 'Soporte Técnico',
      descripcion: 'Mantenimiento y reparación de equipos.',
      imagen: 'https://picsum.photos/id/2/400/250',
    },
  ]

  return (
    <section className="seccion">
      <h2>Datos Locales</h2>
      <p className="ayuda">Servicios cargados desde un array local.</p>

      <div className="grilla">
        {elementosLocales.map((item) => (
          <article key={item.id} className="tarjeta">
            <img src={item.imagen} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DatosLocales
