import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({
  messages,
  lastMessageRef,
  typingStatus,
  selectedChatUser,
}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p> KOOBECAF and chill </p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Leave Chat
        </button>
      </header>
      <p> {selectedChatUser.userName ?? ""}</p>

      <div className="message__container">
        {/* Message sent from you  */}
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name"> You </p>
              <div className="message__sender">
                <p> {message.text} </p>
              </div>
            </div>
          ) : (
            /*  Message from your fren */
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/* Trigger when typing message  */}
        <div className="message__status">
          <p> {typingStatus} </p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
