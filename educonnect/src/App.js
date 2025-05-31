import React from 'react';
import './App.css';
import logo from './assets/logo.png';
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
          <div className="educonnect-logo">
            Classroom Insider
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
                Join Classroom
              </button>
              <button className="btn btn-classroom create-classroom-btn" type="button">
                Create Classroom
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