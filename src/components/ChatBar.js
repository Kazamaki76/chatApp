import React, { useEffect, useState } from "react";

const ChatBar = ({ socket, onClick }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header"> Active Users </h4>
        <div className="chat__users">
          {users.map((user) => (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => onClick(user)}
              key={user.socketID}
            >
              {" "}
              {user.userName}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
