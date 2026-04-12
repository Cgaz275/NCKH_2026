'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="page-wrapper">
      {/* ==================== HEADER ==================== */}
      <header className="site-header">
        {/* Logo */}
        <a
          href="/"
          className="header-logo-block"
        >
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0H14.1667C12.6196 0 11.1359 0.614581 10.0419 1.70854C8.94796 2.80251 8.33337 4.28624 8.33337 5.83333C8.33337 7.38043 8.94796 8.86416 10.0419 9.95812C11.1359 11.0521 12.6196 11.6667 14.1667 11.6667M20 0V11.6667M20 0H25.8334C26.5994 -1.14149e-08 27.358 0.150883 28.0657 0.444036C28.7734 0.737188 29.4165 1.16687 29.9582 1.70854C30.4998 2.25022 30.9295 2.89328 31.2227 3.60101C31.5158 4.30875 31.6667 5.06729 31.6667 5.83333C31.6667 6.59938 31.5158 7.35792 31.2227 8.06565C30.9295 8.77339 30.4998 9.41645 29.9582 9.95812C29.4165 10.4998 28.7734 10.9295 28.0657 11.2226C27.358 11.5158 26.5994 11.6667 25.8334 11.6667M20 11.6667H14.1667M20 11.6667H25.8334M20 11.6667V23.3333M14.1667 11.6667C12.6196 11.6667 11.1359 12.2812 10.0419 13.3752C8.94796 14.4692 8.33337 15.9529 8.33337 17.5C8.33337 19.0471 8.94796 20.5308 10.0419 21.6248C11.1359 22.7188 12.6196 23.3333 14.1667 23.3333M25.8334 11.6667C25.0673 11.6667 24.3088 11.8175 23.6011 12.1107C22.8933 12.4039 22.2503 12.8335 21.7086 13.3752C21.1669 13.9169 20.7372 14.5599 20.4441 15.2677C20.1509 15.9754 20 16.734 20 17.5C20 18.266 20.1509 19.0246 20.4441 19.7323C20.7372 20.4401 21.1669 21.0831 21.7086 21.6248C22.2503 22.1665 22.8933 22.5961 23.6011 22.8893C24.3088 23.1824 25.0673 23.3333 25.8334 23.3333C26.5994 23.3333 27.358 23.1824 28.0657 22.8893C28.7734 22.5961 29.4165 22.1665 29.9582 21.6248C30.4998 21.0831 30.9295 20.4401 31.2227 19.7323C31.5158 19.0246 31.6667 18.266 31.6667 17.5C31.6667 16.734 31.5158 15.9754 31.2227 15.2677C30.9295 14.5599 30.4998 13.9169 29.9582 13.3752C29.4165 12.8335 28.7734 12.4039 28.0657 12.1107C27.358 11.8175 26.5994 11.6667 25.8334 11.6667ZM14.1667 23.3333C12.6196 23.3333 11.1359 23.9479 10.0419 25.0419C8.94796 26.1358 8.33337 27.6196 8.33337 29.1667C8.33337 30.7138 8.94796 32.1975 10.0419 33.2915C11.1359 34.3854 12.6196 35 14.1667 35C15.7138 35 17.1975 34.3854 18.2915 33.2915C19.3855 32.1975 20 30.7138 20 29.1667V23.3333M14.1667 23.3333H20"
              stroke="#1E1E1E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <a
            href="/"
            className="nav-pill nav-pill--active"
          >
            Trang chủ
          </a>
          <a
            href="/documents"
            className="nav-pill"
          >
            Quản lý tài liệu
          </a>
          <a
            href="/chatbot"
            className="nav-pill"
          >
            ChatBot
          </a>
        </nav>

        {/* Right side: Hamburger + Auth */}
        <div className="header-right">
          {/* Hamburger Button (chỉ hiện trên mobile) */}
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E1E1E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Auth Button */}
          <div className="header-auth">
            <button className="btn-connect">Kết nối với Google Drive</button>
          </div>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        {isMenuOpen && (
          <div className="mobile-nav-overlay">
            <nav className="mobile-nav">
              <a
                href="/"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </a>
              <a
                href="/documents"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Quản lý tài liệu
              </a>
              <a
                href="/chatbot"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ChatBot
              </a>
            </nav>

            <button
              className="btn-connect mobile-connect"
              onClick={() => setIsMenuOpen(false)}
            >
              Kết nối với Google Drive
            </button>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">VnIT ChatBOT</h1>
            <p className="hero-subtitle">Demo NCKH -&nbsp; SVC2025-147</p>
          </div>
          <a
            href="/chatbot"
            className="btn-start-chat"
          >
            Bắt đầu Chat
          </a>
        </div>
      </section>
    </div>
  );
}
