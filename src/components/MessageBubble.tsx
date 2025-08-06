import React from 'react';
import { Message } from '../types/Message';

interface MessageBubbleProps {
  message: Message;
}

const formatMessageText = (text: string) => {
  // Convert markdown-style links [text](url) to HTML links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
  };

  return (
    <div className={`message-bubble ${message.sender}`}>
      <div className="message-content">
        {message.sender === 'sara' && (
          <div className="sara-avatar-small">S</div>
        )}
        <div className="message-text">
          <p dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }} />
          <span className="message-time">{formatTime(message.timestamp)}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
