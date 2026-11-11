import './index.css'
import Contacto from './pages/Contacto'
import DatosLocales from './pages/DatosLocales'
import Inicio from './pages/Inicio'

function App() {
  return (
    <>
      <header className="header">
        <h1>Mi Sitio Web</h1>
        <p>Programación Web 2 - UPATECO</p>
      </header>

      <main className="contenedor">
        <Contacto />
        <DatosLocales />
        <Inicio />
      </main>

      <footer className="footer">
        <p>Universidad Provincial de Administración, Tecnología y Oficios - Salta</p>
      </footer>
    </>
  )
}

export default App
