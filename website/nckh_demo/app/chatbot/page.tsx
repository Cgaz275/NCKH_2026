'use client';

import { useState } from 'react';

export default function ChatbotPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const chats = [
    { id: 1, name: "Analog Clock React app", active: true },
    { id: 2, name: "Simple Design System", active: false },
    { id: 3, name: "Figma variable planning", active: false },
    { id: 4, name: "OKCLH token algorithm", active: false },
    { id: 5, name: "Component naming advice", active: false },
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="header-logo-block">
          <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H14.1667C12.6196 0 11.1358 0.614581 10.0419 1.70854C8.94793 2.80251 8.33334 4.28624 8.33334 5.83333C8.33334 7.38043 8.94793 8.86416 10.0419 9.95812C11.1358 11.0521 12.6196 11.6667 14.1667 11.6667M20 0V11.6667M20 0H25.8333C26.5994 -1.14149e-08 27.3579 0.150883 28.0657 0.444036C28.7734 0.737188 29.4165 1.16687 29.9581 1.70854C30.4998 2.25022 30.9295 2.89328 31.2226 3.60101C31.5158 4.30875 31.6667 5.06729 31.6667 5.83333C31.6667 6.59938 31.5158 7.35792 31.2226 8.06565C30.9295 8.77339 30.4998 9.41645 29.9581 9.95812C29.4165 10.4998 28.7734 10.9295 28.0657 11.2226C27.3579 11.5158 26.5994 11.6667 25.8333 11.6667M20 11.6667H14.1667M20 11.6667H25.8333M20 11.6667V23.3333M14.1667 11.6667C12.6196 11.6667 11.1358 12.2812 10.0419 13.3752C8.94793 14.4692 8.33334 15.9529 8.33334 17.5C8.33334 19.0471 8.94793 20.5308 10.0419 21.6248C11.1358 22.7188 12.6196 23.3333 14.1667 23.3333M25.8333 11.6667C25.0673 11.6667 24.3088 11.8175 23.601 12.1107C22.8933 12.4039 22.2502 12.8335 21.7086 13.3752C21.1669 13.9169 20.7372 14.5599 20.444 15.2677C20.1509 15.9754 20 16.734 20 17.5C20 18.266 20.1509 19.0246 20.444 19.7323C20.7372 20.4401 21.1669 21.0831 21.7086 21.6248C22.2502 22.1665 22.8933 22.5961 23.601 22.8893C24.3088 23.1824 25.0673 23.3333 25.8333 23.3333C26.5994 23.3333 27.3579 23.1824 28.0657 22.8893C28.7734 22.5961 29.4165 22.1665 29.9581 21.6248C30.4998 21.0831 30.9295 20.4401 31.2226 19.7323C31.5158 19.0246 31.6667 18.266 31.6667 17.5C31.6667 16.734 31.5158 15.9754 31.2226 15.2677C30.9295 14.5599 30.4998 13.9169 29.9581 13.3752C29.4165 12.8335 28.7734 12.4039 28.0657 12.1107C27.3579 11.8175 26.5994 11.6667 25.8333 11.6667ZM14.1667 23.3333C12.6196 23.3333 11.1358 23.9479 10.0419 25.0419C8.94793 26.1358 8.33334 27.6196 8.33334 29.1667C8.33334 30.7138 8.94793 32.1975 10.0419 33.2915C11.1358 34.3854 12.6196 35 14.1667 35C15.7138 35 17.1975 34.3854 18.2915 33.2915C19.3854 32.1975 20 30.7138 20 29.1667V23.3333M14.1667 23.3333H20" stroke="#1E1E1E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <nav className="header-nav">
          <a href="/" className="nav-pill">Trang chủ</a>
          <a href="/documents" className="nav-pill">Quản lý tài liệu</a>
          <a href="/chatbot" className="nav-pill nav-pill--active">ChatBot</a>
        </nav>

        <div className="header-auth">
          <button className="btn-connect">Kết nối với Google Drive</button>
        </div>
      </header>

      {/* Chatbot Layout */}
      <div className="chatbot-layout">
        {/* Sidebar */}
        <aside className={`chat-sidebar ${sidebarCollapsed ? 'chat-sidebar--collapsed' : ''}`}>
          <div className="chat-sidebar-top">
            {/* Sidebar Header */}
            <div className="chat-sidebar-header">
              <button className="btn-sidebar-toggle" aria-label="Thu lại thanh bên" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5H18M2 10H18M2 15H18" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {!sidebarCollapsed && <span className="chat-sidebar-title">Flippy chats</span>}
              <div className="chat-sidebar-header-actions">
                {!sidebarCollapsed && (
                  <button className="btn-new-chat" aria-label="Tạo chat mới">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {!sidebarCollapsed && (
              <>
                {/* Search */}
                <div className="chat-search">
                  <span className="chat-search-placeholder">Search</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Chat List */}
                <div className="chat-list-section">
                  <div className="chat-list-label">Chats</div>
                  <ul className="chat-list">
                    {chats.map((chat) => (
                      <li key={chat.id} className={`chat-list-item${chat.active ? " chat-list-item--active" : ""}`}>
                        {chat.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* User Profile */}
          {!sidebarCollapsed && (
            <div className="chat-sidebar-user">
              <img
                className="chat-user-avatar"
                src="https://api.builder.io/api/v1/image/assets/TEMP/5e07d323387954916a3c5818edf3ffab5e0449da?width=48"
                alt="User avatar"
              />
              <span className="chat-user-email">flippy@figma.com</span>
            </div>
          )}
        </aside>

        {/* Main Chat Area */}
        <main className="chat-main">
          <div className="chat-messages">
            {/* User Message */}
            <div className="chat-user-message-row">
              <div className="chat-user-bubble">
                Hey Flippy! Write me a script for building an Analag Clock.
              </div>
            </div>

            {/* Bot Response */}
            <div className="chat-bot-message">
              <div className="chat-bot-header">
                <svg className="chat-bot-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_bot_figma)">
                    <path d="M9.99996 1.66669H7.08329C6.30974 1.66669 5.56788 1.97398 5.0209 2.52096C4.47392 3.06794 4.16663 3.80981 4.16663 4.58335C4.16663 5.3569 4.47392 6.09877 5.0209 6.64575C5.56788 7.19273 6.30974 7.50002 7.08329 7.50002M9.99996 1.66669V7.50002M9.99996 1.66669H12.9166C13.2996 1.66669 13.6789 1.74213 14.0328 1.8887C14.3867 2.03528 14.7082 2.25012 14.979 2.52096C15.2499 2.7918 15.4647 3.11333 15.6113 3.46719C15.7578 3.82106 15.8333 4.20033 15.8333 4.58335C15.8333 4.96638 15.7578 5.34565 15.6113 5.69951C15.4647 6.05338 15.2499 6.37491 14.979 6.64575C14.7082 6.91659 14.3867 7.13143 14.0328 7.278C13.6789 7.42458 13.2996 7.50002 12.9166 7.50002M9.99996 7.50002H7.08329M9.99996 7.50002H12.9166M9.99996 7.50002V13.3334M7.08329 7.50002C6.30974 7.50002 5.56788 7.80731 5.0209 8.35429C4.47392 8.90127 4.16663 9.64314 4.16663 10.4167C4.16663 11.1902 4.47392 11.9321 5.0209 12.4791C5.56788 13.0261 6.30974 13.3334 7.08329 13.3334M12.9166 7.50002C12.5336 7.50002 12.1543 7.57546 11.8005 7.72204C11.4466 7.86861 11.1251 8.08345 10.8542 8.35429C10.5834 8.62513 10.3686 8.94666 10.222 9.30053C10.0754 9.65439 9.99996 10.0337 9.99996 10.4167C9.99996 10.7997 10.0754 11.179 10.222 11.5328C10.3686 11.8867 10.5834 12.2082 10.8542 12.4791C11.1251 12.7499 11.4466 12.9648 11.8005 13.1113C12.1543 13.2579 12.5336 13.3334 12.9166 13.3334C13.2996 13.3334 13.6789 13.2579 14.0328 13.1113C14.3867 12.9648 14.7082 12.7499 14.979 12.4791C15.2499 12.2082 15.4647 11.8867 15.6113 11.5328C15.7578 11.179 15.8333 10.7997 15.8333 10.4167C15.8333 10.0337 15.7578 9.65439 15.6113 9.30053C15.4647 8.94666 15.2499 8.62513 14.979 8.35429C14.7082 8.08345 14.3867 7.86861 14.0328 7.72204C13.6789 7.57546 13.2996 7.50002 12.9166 7.50002ZM7.08329 13.3334C6.30974 13.3334 5.56788 13.6406 5.0209 14.1876C4.47392 14.7346 4.16663 15.4765 4.16663 16.25C4.16663 17.0236 4.47392 17.7654 5.0209 18.3124C5.56788 18.8594 6.30974 19.1667 7.08329 19.1667C7.85684 19.1667 8.59871 18.8594 9.14569 18.3124C9.69267 17.7654 9.99996 17.0236 9.99996 16.25V13.3334M7.08329 13.3334H9.99996" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_bot_figma">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p className="chat-bot-text">
                  Sure. Here is a Typescript code block for your Analog Clock project. It is built using React, and uses the local time for London, England as standard. Let me know if you would like to make any refinements to the code.
                </p>
              </div>

              {/* Code Block */}
              <div className="code-block">
                <div className="code-line-numbers">
                  {Array.from({ length: 31 }, (_, i) => (
                    <span key={i + 1}>{i + 1}</span>
                  ))}
                </div>
                <pre className="code-content"><code>{`import `}<span className="code-keyword">React</span>{`, { `}<span className="code-fn">useState</span>{`, `}<span className="code-fn">useEffect</span>{` } `}<span className="code-keyword">from</span>{` `}<span className="code-string">"react"</span>{`;
import`}{` { defineProperties } `}<span className="code-keyword">from</span>{` `}<span className="code-string">"figma:react"</span>{`;

`}<span className="code-keyword">export default function </span><span className="code-fn">AnalogClock</span>{`({
  updateInterval `}<span className="code-keyword">=</span>{` `}<span className="code-number">1000</span>{`,
  secondHandColor `}<span className="code-keyword">=</span>{` `}<span className="code-string">"red"</span>{`,
  minuteHandColor `}<span className="code-keyword">=</span>{` `}<span className="code-string">"black"</span>{`,
  hourHandColor `}<span className="code-keyword">=</span>{` `}<span className="code-string">"black"</span>{`,
}) {
  `}<span className="code-keyword">const</span>{` [time, setTime] `}<span className="code-keyword">=</span>{` `}<span className="code-fn">useState</span>{`({ `}<span className="code-prop">hours</span>{`: `}<span className="code-number">0</span>{`, `}<span className="code-prop">minutes</span>{`: `}<span className="code-number">0</span>{`, `}<span className="code-prop">seconds</span>{`: `}<span className="code-number">0</span>{` });

  `}<span className="code-fn">useEffect</span>{`(() `}<span className="code-keyword">=&gt;</span>{` {
    `}<span className="code-keyword">const</span>{` `}<span className="code-fn">updateClock</span>{` `}<span className="code-keyword">=</span>{` () `}<span className="code-keyword">=&gt;</span>{` {
`}<span className="code-comment">      // Get London's local time using en-GB format</span>{`
      `}<span className="code-keyword">const</span>{` londonTimeString `}<span className="code-keyword">= new </span><span className="code-prop">Date</span>{`().`}<span className="code-prop">toLocaleTimeString</span>{`(`}<span className="code-string">"en-GB"</span>{`, {
        `}<span className="code-prop">timeZone</span><span className="code-keyword">:</span>{` `}<span className="code-string">"Europe/London"</span>{`,
        `}<span className="code-prop">hour12</span><span className="code-keyword">:</span>{` `}<span className="code-number">false</span>{`
      });
      `}<span className="code-keyword">const</span>{` [hoursStr, minutesStr, secondsStr] `}<span className="code-keyword">= </span>{`londonTimeString.`}<span className="code-prop">split</span>{`(`}<span className="code-string">":"</span>{`);
      `}<span className="code-fn">setTime</span>{`({
        `}<span className="code-prop">hours</span>{`: `}<span className="code-fn">parseInt</span>{`(hoursStr, `}<span className="code-number">10</span>{`),
        `}<span className="code-prop">minutes</span>{`: `}<span className="code-fn">parseInt</span>{`(minutesStr, `}<span className="code-number">10</span>{`),
        `}<span className="code-prop">seconds</span>{`: `}<span className="code-fn">parseInt</span>{`(secondsStr, `}<span className="code-number">10</span>{`)
      });
    };

    `}<span className="code-fn">updateClock</span>{`();
    `}<span className="code-keyword">const</span>{` timerId `}<span className="code-keyword">=</span>{` `}<span className="code-fn">setInterval</span>{`(updateClock, updateInterval);
    `}<span className="code-keyword">return</span>{` () `}<span className="code-keyword">=&gt;</span>{` `}<span className="code-fn">clearInterval</span>{`(timerId);
  }, [updateInterval]);`}</code></pre>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="chat-input-box">
            <p className="chat-input-placeholder">What would you like to know?</p>
            <div className="chat-input-actions">
              <div className="chat-input-tools">
                <button className="btn-tool" aria-label="Thêm code">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 15L18.3333 10L13.3333 5M6.66663 5L1.66663 10L6.66663 15" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <button className="btn-send" disabled aria-label="Gửi">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99996 15.8333V4.16666M9.99996 4.16666L4.16663 10M9.99996 4.16666L15.8333 10" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}
