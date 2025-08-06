import React from 'react';

interface QuickChatProps {
  onQuickMessage: (message: string) => void;
}

const QuickChat: React.FC<QuickChatProps> = ({ onQuickMessage }) => {
  const quickChatOptions = [
    {
      icon: '🤖',
      text: 'What can you help me with?',
      message: 'What can you help me with?'
    },
    {
      icon: '🌤️',
      text: 'What\'s the weather like?',
      message: 'What\'s the weather like today?'
    },
    {
      icon: '📰',
      text: 'Tell me about current news',
      message: 'What\'s happening in the news today?'
    },
    {
      icon: '💡',
      text: 'Help me learn something new',
      message: 'I want to learn something new today'
    },
    {
      icon: '🔧',
      text: 'Technology questions',
      message: 'I have some technology questions'
    },
    {
      icon: '💬',
      text: 'Just want to chat',
      message: 'Hi Sara, let\'s have a conversation'
    }
  ];

  return (
    <div className="quick-chat">
      <h3>How can I help you today?</h3>
      <p>Choose a topic below or ask me anything!</p>
      <div className="quick-chat-buttons">
        {quickChatOptions.map((option, index) => (
          <button
            key={index}
            className="quick-chat-button"
            onClick={() => onQuickMessage(option.message)}
          >
            <span className="quick-chat-icon">{option.icon}</span>
            <span className="quick-chat-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickChat;
