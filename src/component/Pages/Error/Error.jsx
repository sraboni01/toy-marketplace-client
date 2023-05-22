import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container m-auto">
      <div className="p-5 m-5">
        <h1>Oops! Your page is Not Found</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <h2>
          <Link to={"/"}>Go Homepage</Link>
        </h2>
      </div>
    </div>
  );
};

export default Error;
