import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center min-h-[80vh] w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

export default Loader;
