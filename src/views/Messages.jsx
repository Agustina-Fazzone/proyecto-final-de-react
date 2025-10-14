import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { useChat } from "../context/ChatContext.jsx"

export default function Message() {
  const { selectedUser } = useChat();

  return (
    <div className={`app ${selectedUser ? "has-selection" : ""}`}>
      <Sidebar />
      <Chat />
    </div>
  );

}

