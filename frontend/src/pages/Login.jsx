import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="login-page">

      {/* Background */}
      <div className="background-overlay"></div>

      {/* Header */}
      <header className="login-header">

        <div className="logo">
          FLIXUP
        </div>

      </header>

      {/* Login */}
      <main className="login-container">

        <LoginForm />

      </main>

      {/* Footer */}
      <footer className="login-footer">

        <p>
         FlixUp - Watch TV Shows & Movies Online!!Comming Soon
        </p>

      </footer>

    </div>
  );
}

export default Login;