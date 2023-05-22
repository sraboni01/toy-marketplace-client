import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container m-auto">
      <div className="p-5 m-5">
        <img
          className="w-100 h-100vh"
          src="https://i.ibb.co/pL06RT5/404-page.jpg"
          alt=""
        />
        <h2>
          <Link to={"/"}>Go Homepage</Link>
        </h2>
      </div>
    </div>
  );
};

export default Error;
