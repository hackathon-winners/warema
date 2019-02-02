import React from "react";

export default function({ messages }) {
  if (messages.length === 0) {
    return <p>No Entries yet.</p>;
  }

  return (
    <ul>
      {messages.map(message => (
        <li>
          <span>{message.time}</span> {message.text}
        </li>
      ))}
    </ul>
  );
}
