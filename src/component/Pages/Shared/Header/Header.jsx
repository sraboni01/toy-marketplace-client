import { useContext } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  console.log(user);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand>
            <Link to={"/"}>
              <span className="text-white fs-4 fw-bold pl-2">
                <span style={{ color: "yellow" }}>T</span>OYS
              </span>
              <img
                style={{ maxHeight: "90px" }}
                src="https://i.ibb.co/64YFMMz/logo.png"
              />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="m-auto">
              <Link className="p-3 text-decoration-none text-white" to={"/"}>
                Home
              </Link>
              <Link to={Error}></Link>
              <Link
                className="p-3 text-decoration-none text-white"
                to={"/alltoys"}
              >
                All Toys
              </Link>
              <Link
                className="p-3 text-decoration-none text-white"
                to={"/mytoys"}
              >
                My Toys
              </Link>
              <Link
                className="p-3 text-decoration-none text-white"
                to={"/addtoys"}
              >
                Add Toys
              </Link>
              <Link
                className="p-3 text-decoration-none text-white"
                to={"/blog"}
              >
                Blog
              </Link>
            </Nav>

            <Nav className="flex align-items-center gap-3">
              <div>
                {user ? (
                  <img
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserAlt className="fs-1" />
                )}
              </div>

              <div>
                {user ? (
                  <Button onClick={handleLogout} className="btn btn-primary">
                    LogOut
                  </Button>
                ) : (
                  <Link
                    className="p-3 text-decoration-none text-white"
                    to={"/login"}
                  >
                    Login
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
