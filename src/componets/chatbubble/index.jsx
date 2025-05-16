import "./chat.css"

const ChatBubble = ({ msg }) => {
  const { message, role } = msg;
  const isBot = role === "bot";

  return (
    <div className={`chat-bubble-container ${isBot ? "left" : "right"}`}>
      <div className="chat-bubble">
        <p className="sender">{isBot ? "Bot" : "Me"}</p>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
