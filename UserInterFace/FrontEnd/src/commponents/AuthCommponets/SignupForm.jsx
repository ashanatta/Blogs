import React from "react";
import AuthStore from "../../storage/AuthStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignupForm() {
  const store = AuthStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={store.updateSignupForm}
                value={store.signupForm.email}
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
                onChange={store.updateSignupForm}
                value={store.signupForm.password}
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <Link className="btn btn-secondary float-end" to="/login">
              already Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
