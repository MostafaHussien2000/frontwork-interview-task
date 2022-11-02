import React from "react";

function Chat({ messageInfo }) {
  // Send Message Handler
  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="chat-box" className="hidden">
        <div className="message-info">
          <button id="close-chat">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
            </svg>
          </button>
          <div className="user-info">
            <div className="profile-pic">
              <img src={messageInfo?.sender?.profilePic} alt="sender" />
            </div>
            <div className="name">
              <h2 className="full-name">{messageInfo?.sender?.fullName}</h2>
              <p className="position">{messageInfo?.sender?.position}</p>
            </div>
          </div>
          <div className="message-body">{messageInfo?.body}</div>
        </div>
        <form className="typing-box" onSubmit={sendMessage}>
          <input
            type="text"
            name="reply"
            id="reply"
            placeholder="Type your message ..."
          />
          <button id="send-message-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;
