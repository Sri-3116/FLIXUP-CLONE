import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    navigate("/");
  };

  return (
    <div className="dashboard-page">

      {/* Header */}
      <header className="dashboard-header">

        <div className="dashboard-logo">
          FLIXUP
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* Main Content */}
      <main className="dashboard-content">

        <div className="welcome-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Welcome to Flixup
          </h1>

          <p>
            You have successfully signed in.
          </p>

          {userEmail && (
            <p className="user-email">
              Signed in as <strong>{userEmail}</strong>
            </p>
          )}

          <button
            className="browse-button"
            onClick={() => alert("Browse feature coming soon!")}
          >
            Start Browsing
          </button>

        </div>

      </main>


      {/* Footer */}
      <footer className="dashboard-footer">
        flixup.com
      </footer>

    </div>
  );
}

export default Dashboard;