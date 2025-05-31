import React from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * EduConnect Dashboard - Main UI with navbar and actions to join or create a classroom.
 * Uses EduConnect color scheme and dark theme.
 */
function App() {
  return (
    <div className="app educonnect-dark">
      <nav className="navbar educonnect-navbar">
        <div className="container navbar-content">
          <div className="logo educonnect-logo">
            <span className="logo-symbol educonnect-logo-symbol">✦</span>
            EduConnect
            <span className="logo-version">Dashboard</span>
          </div>
          {/* Placeholder for nav links or user menu */}
          <div className="navbar-links">
            {/* Could add "Profile", "Settings", etc. */}
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="container dashboard-container">
          <section className="dashboard-hero">
            <h2 className="dashboard-welcome">Welcome to EduConnect</h2>
            <div className="dashboard-actions">
              <button className="btn btn-classroom join-classroom-btn" type="button">
                Join Classroom
              </button>
              <button className="btn btn-classroom create-classroom-btn" type="button">
                Create Classroom
              </button>
            </div>
            <div className="dashboard-info">
              Connect, collaborate, and learn together! <br />
              Use the options above to join an existing class or create a new virtual classroom.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;