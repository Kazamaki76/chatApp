import React, { useEffect, useRef, useState } from "react";
import ChatBar from "./ChatBar.js";
import ChatBody from "./ChatBody.js";
import ChatFooter from "./ChatFooter.js";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
      // if (!data.length) {
      //   setTypingStatus("");
      // }
      console.log("data", data);
    });
    console.log(messages);
  }, [socket, messages]);

  useEffect(() => {
    // scroll to buttom after so many message
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => {
      console.log(data);
      setTypingStatus(data);
    });
    socket.on("messageResponse", (data) => {
      if (data.name !== localStorage.getItem("userName")) {
        setTypingStatus("");
      }
    });
  }, [socket]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter socket={socket} setTypingStatus={setTypingStatus} />
      </div>
    </div>
  );
};

export default ChatPage;
