export default function DocumentsPage() {
  const documents = [
    { id: 1, name: "Tên tài liệu" },
    { id: 2, name: "Tên tài liệu" },
    { id: 3, name: "Tên tài liệu" },
    { id: 4, name: "Tên tài liệu" },
    { id: 5, name: "Tên tài liệu" },
    { id: 6, name: "Tên tài liệu" },
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="header-logo-block">
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0H14.1667C12.6196 0 11.1358 0.614581 10.0419 1.70854C8.94793 2.80251 8.33334 4.28624 8.33334 5.83333C8.33334 7.38043 8.94793 8.86416 10.0419 9.95812C11.1358 11.0521 12.6196 11.6667 14.1667 11.6667M20 0V11.6667M20 0H25.8333C26.5994 -1.14149e-08 27.3579 0.150883 28.0657 0.444036C28.7734 0.737188 29.4165 1.16687 29.9581 1.70854C30.4998 2.25022 30.9295 2.89328 31.2226 3.60101C31.5158 4.30875 31.6667 5.06729 31.6667 5.83333C31.6667 6.59938 31.5158 7.35792 31.2226 8.06565C30.9295 8.77339 30.4998 9.41645 29.9581 9.95812C29.4165 10.4998 28.7734 10.9295 28.0657 11.2226C27.3579 11.5158 26.5994 11.6667 25.8333 11.6667M20 11.6667H14.1667M20 11.6667H25.8333M20 11.6667V23.3333M14.1667 11.6667C12.6196 11.6667 11.1358 12.2812 10.0419 13.3752C8.94793 14.4692 8.33334 15.9529 8.33334 17.5C8.33334 19.0471 8.94793 20.5308 10.0419 21.6248C11.1358 22.7188 12.6196 23.3333 14.1667 23.3333M25.8333 11.6667C25.0673 11.6667 24.3088 11.8175 23.601 12.1107C22.8933 12.4039 22.2502 12.8335 21.7086 13.3752C21.1669 13.9169 20.7372 14.5599 20.444 15.2677C20.1509 15.9754 20 16.734 20 17.5C20 18.266 20.1509 19.0246 20.444 19.7323C20.7372 20.4401 21.1669 21.0831 21.7086 21.6248C22.2502 22.1665 22.8933 22.5961 23.601 22.8893C24.3088 23.1824 25.0673 23.3333 25.8333 23.3333C26.5994 23.3333 27.3579 23.1824 28.0657 22.8893C28.7734 22.5961 29.4165 22.1665 29.9581 21.6248C30.4998 21.0831 30.9295 20.4401 31.2226 19.7323C31.5158 19.0246 31.6667 18.266 31.6667 17.5C31.6667 16.734 31.5158 15.9754 31.2226 15.2677C30.9295 14.5599 30.4998 13.9169 29.9581 13.3752C29.4165 12.8335 28.7734 12.4039 28.0657 12.1107C27.3579 11.8175 26.5994 11.6667 25.8333 11.6667ZM14.1667 23.3333C12.6196 23.3333 11.1358 23.9479 10.0419 25.0419C8.94793 26.1358 8.33334 27.6196 8.33334 29.1667C8.33334 30.7138 8.94793 32.1975 10.0419 33.2915C11.1358 34.3854 12.6196 35 14.1667 35C15.7138 35 17.1975 34.3854 18.2915 33.2915C19.3854 32.1975 20 30.7138 20 29.1667V23.3333M14.1667 23.3333H20"
              stroke="#1E1E1E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <nav className="header-nav">
          <a href="/" className="nav-pill">Trang chủ</a>
          <a href="/documents" className="nav-pill nav-pill--active">Quản lý tài liệu</a>
          <a href="/chatbot" className="nav-pill">ChatBot</a>
        </nav>

        <div className="header-auth">
          <button className="btn-connect">Kết nối với Google Drive</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="documents-main">
        {/* Page Heading */}
        <div className="documents-heading">
          <h1 className="documents-title">QUẢN LÝ TÀI LIỆU</h1>
          <p className="documents-subtitle">Tài liệu drive của bạn</p>
        </div>

        {/* Search Bar */}
        <div className="documents-search-wrapper">
          <div className="documents-search">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm tài liệu..."
            />
            <button className="btn-search" aria-label="Tìm kiếm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18L14.65 14.65"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Document Card Grid */}
        <div className="documents-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="doc-card">
              <div className="doc-card-thumbnail">
                <svg
                  className="doc-thumbnail-icon"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="4" fill="#E3E3E3" />
                  <path
                    d="M14 34L19.5 26.5L23.5 31.5L29 23L34 34H14Z"
                    fill="#B0B0B0"
                  />
                  <circle cx="19" cy="19" r="3" fill="#B0B0B0" />
                </svg>
              </div>
              <div className="doc-card-info">
                <span className="doc-card-name">{doc.name}</span>
                <button className="btn-chat-doc">Chat với tài liệu</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="pagination">
          <button className="pagination-prev" disabled>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 8.00001H3.33333M3.33333 8.00001L7.99999 12.6667M3.33333 8.00001L7.99999 3.33334" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Trang trước
          </button>

          <div className="pagination-pages">
            <button className="pagination-page pagination-page--current">1</button>
            <button className="pagination-page">2</button>
            <button className="pagination-page">3</button>
            <span className="pagination-gap">...</span>
            <button className="pagination-page">67</button>
            <button className="pagination-page">68</button>
          </div>

          <button className="pagination-next">
            Trang sau
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8.00001H12.6667M12.6667 8.00001L8.00001 3.33334M12.6667 8.00001L8.00001 12.6667" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>
      </main>
    </div>
  );
}
