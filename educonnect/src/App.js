import React from 'react';
import './App.css';
import notebookLogo from './assets/notebook-logo.svg';

/**
 * PUBLIC_INTERFACE
 * Classroom Insider Dashboard - Modern UI with baby blue theme.
 * Provides navigation bar and actions to join or create a classroom.
 */
function App() {
  return (
    <div className="app educonnect-dark">
      <nav className="navbar educonnect-navbar">
        <div className="container navbar-content">
          <div className="educonnect-logo" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src={notebookLogo}
              alt="Notebook logo"
              className="navbar-logo-img"
              width={42}
              height={42}
              aria-label="Notebook logo"
              draggable={false}
            />
            <span>Classroom Insider</span>
          </div>
          {/* Navbar links can be added here in future */}
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="container dashboard-container">
          <section className="dashboard-hero">
            <h2 className="dashboard-welcome">Welcome to Classroom Insider</h2>
            <div className="dashboard-actions">
              <button className="btn btn-classroom join-classroom-btn" type="button">
                Join
              </button>
              <button className="btn btn-classroom create-classroom-btn" type="button">
                Create
              </button>
            </div>
            <div className="dashboard-info">
              Connect, collaborate, and learn together!
              <br />
              Use the options above to join an existing class or create a new virtual classroom.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;