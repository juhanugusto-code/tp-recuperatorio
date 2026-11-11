import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Credenciales de EmailJS (cuenta propia)
const SERVICE_ID = 'service_7d9iwjt'
const TEMPLATE_ID = 'template_7opis4g'
const PUBLIC_KEY = 'S3zl_xRI3muLk3Fm3'

function Contacto() {
  const form = useRef()
  const [estado, setEstado] = useState('')

  // Se ejecuta al enviar el formulario: EmailJS manda los datos al correo.
  const enviarCorreo = (e) => {
    e.preventDefault()
    setEstado('enviando')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setEstado('ok')
        form.current.reset()
      })
      .catch((error) => {
        console.log('Error EmailJS:', error)
        setEstado('error')
      })
  }

  return (
    <section className="contacto">
      {/* Columna izquierda: formulario */}
      <div className="columna">
        <h2>Formulario de Contacto</h2>
        <p className="ayuda">Escribinos y te respondemos por correo.</p>

        <form ref={form} onSubmit={enviarCorreo} className="formulario">
          <input type="hidden" name="title" value="Mensaje desde la web" />

          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" name="name" placeholder="Tu nombre" required />

          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" name="email" placeholder="tu@correo.com" required />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje..."
            required
          ></textarea>

          <button type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {estado === 'ok' && (
            <p className="mensaje-ok">¡Mensaje enviado correctamente!</p>
          )}
          {estado === 'error' && (
            <p className="mensaje-error">No se pudo enviar. Intentá de nuevo.</p>
          )}
        </form>
      </div>

      {/* Columna derecha: mapa de la UPATECO */}
      <div className="columna">
        <h2>Nuestra Ubicación</h2>
        <p className="ayuda">UPATECO - Universidad Provincial de Administración, Tecnología y Oficios.</p>

        <iframe
          className="mapa"
          title="Mapa de UPATECO Salta"
          src="https://maps.google.com/maps?q=UPATECO%20Salta&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Contacto
