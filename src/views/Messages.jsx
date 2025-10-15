import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { useChat } from "../context/ChatContext.jsx";

export default function Message() {
  const { selectedUser } = useChat();

  return (
    // ✅ Si hay usuario seleccionado, activa la clase show-chat
    <div className={`app ${selectedUser ? "show-chat" : ""}`}>
      <Sidebar />
      <Chat />
    </div>
  );
}
