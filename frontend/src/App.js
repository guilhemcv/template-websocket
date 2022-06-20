import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);
  /**
   * Structure d'un message
   * {
   *     author: "nickname",
   *     text: "message"
   *     id: currentUser
   * }
   */
  const [nickName, setNickName] = useState("");
  const [newMessageText, setNewMessageText] = useState("");
  const [socket, setSocket] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //!TO DO: submit message to server
  };

  // Au montage de la page
  useEffect(() => {
    //!TO DO création de la connexion avec le serveur
  }, []);

  // Mise à jour de la liste des messages
  useEffect(() => {
    //!TO DO: récupération des messages du serveur
  }, [messageList]);

  return (
    <div className="App">
      <h2>Messages</h2>
      {messageList.map((message, id) => {
        return (
          <p
            key={id}
            className={message.id === currentUser ? "my-message" : "message"}
          >
            <strong>{message.author}</strong>: {message.text}
          </p>
        );
      })}
      <form onSubmit={handleSubmit}>
        <h2>New Message</h2>
        <input
          type="text"
          name="author"
          placeholder="nickname"
          value={nickName}
          required
          onChange={(e) => setNickName(e.target.value)}
        />
        <input
          type="text"
          name="messageContent"
          placeholder="message"
          value={newMessageText}
          required
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default App;
