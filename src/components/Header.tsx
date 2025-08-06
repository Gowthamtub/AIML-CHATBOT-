import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="chat-header">
      <div className="header-content">
        <div className="sara-info">
          <div className="sara-avatar">
            <span>S</span>
          </div>
          <div className="sara-details">
            <h1>Sara</h1>
            <p>AI Assistant</p>
          </div>
        </div>
        <div className="status-indicator">
          <div className="online-dot"></div>
          <span>Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
