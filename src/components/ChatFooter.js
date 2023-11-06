import React, { useEffect, useState } from "react";



const ChatFooter = ({ socket,  }) => {
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    console.log("message", message);
    if (!message.length) {
      socket.emit("typing", ``);
    }
  }, [message]);

  const handleTyping = (e) => {
    if (e.key === "Enter") {
      socket.emit("typing", null);

    }
    if (e.key !== "Backspace"  ) {
      socket.emit("typing", `${localStorage.getItem("userName")} is typing`);
    }
    console.log(e.key)
  };
 


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write Something"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // add onKeydown event listener
          onKeyDown={handleTyping}
        />
        <button className="sendBtn"> Send </button>
        
      </form>
      
    </div>
  );
};

export default ChatFooter;
