import { useState, useEffect } from 'react'

function Inicio() {
  const [fotos, setFotos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setFotos(datos)
        setCargando(false)
      })
      .catch(() => setCargando(false))
  }, [])

  return (
    <section className="seccion">
      <h2>Fotos desde la API</h2>
      <p className="ayuda">Datos traídos con fetch desde jsonplaceholder.</p>

      {cargando && <p>Cargando...</p>}

      <div className="grilla">
        {fotos.map((foto) => (
          <article key={foto.id} className="tarjeta">
            <img src={foto.url} alt={foto.title} />
            <h3>{foto.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Inicio
