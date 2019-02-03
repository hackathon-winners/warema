import React from "react";

export default function({ messages }) {
  if (messages.length === 0) {
    return <p>No Entries yet.</p>;
  }

  return (
    <ul>
      {messages.map(message => (
        <li key={Math.random()}>{message}</li>
      ))}
    </ul>
  );
}
