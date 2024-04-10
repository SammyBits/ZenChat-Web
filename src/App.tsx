import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import "./App.css";

const socket: Socket = io("/");

interface Message {
  body: string;
  from: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: Message = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
  };

  useEffect(() => {
    const receiveMessage = (msg: Message) =>
      setMessages((state) => [...state, msg]);
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name="message"
          id="message"
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((m: Message, index: number) => (
          <li key={index}>
            {m.from}: {m.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
