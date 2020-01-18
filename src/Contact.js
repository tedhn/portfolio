import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="text">
        <div>Got a questions?</div>
        Feel free to drop a <span className="highlight">message</span>
      </div>

      <div className="input">
        <div className="inputBox">
          <span id="name">Name</span>
          <input className="name" />
          <br />
          <span id="email">Email</span>
          <input className="email" />
          <br />
          <div id="message">Message</div>
          <textarea className="message" />
        </div>

        <button>Send</button>
      </div>

      <div className="Watermark">Contac</div>
    </div>
  );
}
