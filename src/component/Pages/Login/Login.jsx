import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signInn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, successMessage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInn(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        form.reset();
        setError("");
        successMessage("Login successfully");
        //validation message
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        form.reset();
        setError("");
        successMessage("Login successfully");
        //validation message
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="py-5 h-100 container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="bg-light text-black shadow"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={handleLogin}
                className="card-body p-5 text-center"
              >
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-black-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                  </div>
                  <div>
                    <p className="fw-bold text-danger">{error}</p>
                    <p className="fw-bold text-success">{success}</p>
                  </div>
                  <p className="small mb-1 pb-lg-2">
                    <a className="text-black-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <div className=" justify-content-center text-center mt-4 pt-1">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign in
                    </Button>

                    <div className=" text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </div>

                    <Button
                      onClick={handleGoogle}
                      className="btn-google btn-lg btn-block mb-2"
                      href="#!"
                      role="button"
                    >
                      <FaGoogle />
                      Continue with Google
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?
                    <Link to={"/register"} className="text-primary-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
