import { Link } from "react-router-dom"
import "../views/help.css"

const Help = () => {
  return (
    <div className="help-container">
      <h1>📘 Ayuda y Documentación</h1>

      <section>
        <h2>🧠 Funcionamiento General del Chat</h2>
        <p>
          Esta aplicación permite a los usuarios enviar y recibir mensajes en tiempo real simulando un entorno de chat. Los mensajes se almacenan localmente para mantener la persistencia entre sesiones. El contexto global gestiona el estado del chat y los usuarios activos.
        </p>
      </section>

      <section>
        <h2>🧰 Tecnologías Utilizadas</h2>
        <ul>
          <li>React (con JSX y componentes funcionales)</li>
          <li>React Router DOM para navegación entre rutas</li>
          <li>Context API para manejo global del estado (ChatContext)</li>
          <li>LocalStorage para persistencia de datos</li>
          <li>CSS modular para estilos personalizados</li>
        </ul>
      </section>

      <section>
        <h2>🚀 Posibles Mejoras Futuras</h2>
        <ul>
          <li>Integración con WebSockets para chat en tiempo real</li>
          <li>Autenticación de usuarios con JWT</li>
          <li>Soporte para emojis, archivos adjuntos y notificaciones</li>
          <li>Modo oscuro y personalización de temas</li>
        </ul>
      </section>
      <section className="help-navigation">
        <Link to="/chat" className="help-back-button">← Volver al chat</Link>
      </section>
    </div>
  );
};




export default Help