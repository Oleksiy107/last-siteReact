import React, { useEffect, useState, useRef } from "react";

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const socket = useRef(null);

  const connect = () => {
    socket.current = new WebSocket("ws://localhost:5554");
    socket.current.onopen = () => {
      setConnected(true);
    };
  };

  useEffect(() => {
    if (connected) {
      socket.current.onmessage = (event) => {
        const newMessage = JSON.parse(event.data); // Parse incoming JSON messages
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      };
    }
  }, [connected]);

  const sendMessage = async () => {
    if (socket.current && value.trim() !== "") {
      const message = {
        event: "message",
        id: Date.now(),
        date: "21.01.2011",
        username: username,
        message: value,
      };
      socket.current.send(JSON.stringify(message));
      setValue("");
    }
  };

  if (!connected) {
    return (
      <div className="center">
        <div className="form">
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={connect}>Connect</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        {/* Display chat messages */}
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              {message.username}: {message.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default WebSocketComponent;
