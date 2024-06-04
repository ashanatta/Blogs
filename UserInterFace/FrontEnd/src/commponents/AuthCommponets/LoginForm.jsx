import React from "react";
import AuthStore from "../../storage/AuthStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  const store = AuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light mt-3 p-4">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={store.updateLoginForm}
                value={store.loginForm.email}
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={store.updateLoginForm}
                value={store.loginForm.password}
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link className="btn btn-secondary float-end" to="/signup">
              Register yourself
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
