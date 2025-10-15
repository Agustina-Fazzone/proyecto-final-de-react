import { useState, useEffect } from "react";
import { useChat } from "../context/ChatContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import ConfigPopup from "../views/ConfigPopup.jsx";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const { users, selectedUser, setUsers, setSelectedUser } = useChat();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === selectedUser);

  // ✅ Manejo del tamaño de pantalla (actualiza al redimensionar)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Si no hay usuario seleccionado, mostrar mensaje
  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, messages: [...u.messages, newMessage] } : u
    );

    setUsers(updatedUsers);
    setMsg("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="chat">
      {/* -------- HEADER -------- */}
      <header className="chat-header">
        {/* ✅ Flecha solo visible en móvil cuando hay usuario seleccionado */}
        {isMobile && selectedUser && (
          <button
            className="back-btn"
            onClick={() => setSelectedUser(null)}
            aria-label="Volver"
            title="Volver"
          >
            ←
          </button>
        )}

        <div className="chat-user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt={user.name}
            className="chat-avatar"
          />
          <div className="user-info">
            <strong>{user.name}</strong>
            {user.lastSeen && (
              <span className="last-seen">Last seen: {user.lastSeen}</span>
            )}
          </div>
        </div>

        <div className="chat-actions">
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <ConfigPopup />
          <Link to="/help" title="Help">
            ❓
          </Link>
          <button onClick={handleLogout}>✖️</button>
        </div>
      </header>

      {/* -------- MENSAJES -------- */}
      <section className="chat-messages">
        {user.messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </section>

      {/* -------- FOOTER -------- */}
      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribí un mensaje..."
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button type="submit" className="send-btn">
            ➤
          </button>
        </form>
      </footer>
    </div>
  );
}
