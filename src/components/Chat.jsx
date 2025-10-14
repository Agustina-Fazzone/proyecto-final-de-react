import { useState } from "react"
import { useChat } from "../context/ChatContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import ConfigPopup from "../views/ConfigPopup.jsx"   // ⬅️ usa tu popup de tema

export default function Chat() {
  const [msg, setMsg] = useState("")
  const { users, selectedUser, setUsers } = useChat()
  const user = users.find(u => u.id === selectedUser)
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!msg.trim()) return
    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
    const updatedUsers = users.map(u => u.id === user.id ? { ...u, messages: [...u.messages, newMessage] } : u)
    setUsers(updatedUsers)
    setMsg("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <div className="chat-user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt={user.name}
            className="chat-avatar"
          />
          <strong>{user.name}</strong>
          {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
        </div>

        <div className="chat-actions">
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          {/* ⬇️ Este botón abre tu popup con Claro/Oscuro usando ThemeContext */}
          <ConfigPopup />
          <Link to="/help" title="Help">❓</Link>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <section className="chat-messages">
        {user.messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </section>

      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button>➤</button>
        </form>
      </footer>
    </div>
  )
}