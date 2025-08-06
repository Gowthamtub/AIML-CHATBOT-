import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="message-bubble sara typing">
      <div className="message-content">
        <div className="sara-avatar-small">S</div>
        <div className="typing-indicator">
          <div className="typing-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span className="typing-text">Sara is typing...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
