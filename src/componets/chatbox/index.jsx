
import { useState } from "react";
import "./chatbox1.css";
import Chatbubble from "../chatbubble";
const ChatBox = () => {
  const [mesg, setMessage] = useState([
    { role: "bot", message: "Hello", id: 2, created_at: Date.now() },
    { role: "user", message: "Hello", id: 2513, created_at: Date.now() },
  ]);

  return (
    <div className="chatbox">
      {mesg.map((msg) => (
        <Chatbubble key={msg.id} msg={msg} />
      ))}
    </div>
  );
};

export default ChatBox;
