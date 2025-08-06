import React, { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Header from './Header';
import QuickChat from './QuickChat';
import { Message } from '../types/Message';
import { generateSaraResponse } from '../utils/saraResponses';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sara, your AI assistant. I'm here to help you with questions, provide information, and have conversations. What would you like to know today?",
      sender: 'sara',
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate Sara thinking time
    setTimeout(async () => {
      const response = await generateSaraResponse(text);
      const saraMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'sara',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, saraMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500); // Random delay between 1-2.5 seconds
  };

  return (
    <div className="chat-interface">
      <Header />
      <div className="chat-container">
        {messages.length === 1 && <QuickChat onQuickMessage={handleSendMessage} />}
        <MessageList 
          messages={messages} 
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
        />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatInterface;
