import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    //console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setError("");
        setSuccess("Registration has been successful");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);

        if (!/(?=.*?[A-Z])/.test(password)) {
          setError("Please at least one upper case letter");
          return;
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
          setError("At least one special character");
          return;
        } else if (password.length < 6) {
          setError("Please add at least 6 character in your password");
        }
      });
  };
  return (
    <div>
      <div className="py-5 h-100 container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <form
              onSubmit={handleSubmit}
              className=" bg-light text-black shadow"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
                  <p className="text-black-50 mb-5">Please Fill Up The Form!</p>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="name"
                      name="name"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Name</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                    <p className="fw-bold text-danger">{error}</p>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="photo"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Photo Url</label>
                    <p className="fw-bold text-danger">{error}</p>
                  </div>
                  <div className=" justify-content-center text-center mt-4 pt-1">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="fw-bold text-success">{success}</p>
                </div>
                <div>
                  <p className="mb-0">
                    You have already an account?
                    <Link to={"/login"} className="text-primary-50 fw-bold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
