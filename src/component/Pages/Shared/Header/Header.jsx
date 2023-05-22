import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
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

            <Nav>
              <Button className="btn btn-primary">LogOut</Button>

              <Link
                className="p-3 text-decoration-none text-white"
                to={"/login"}
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
