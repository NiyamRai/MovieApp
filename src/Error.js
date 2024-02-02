import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
      <Link to={"/"} className="text-blue-400 underline ">
        Navigate Back to home
      </Link>
    </div>
  );
};

export default Error;
