import React from "react";
import { Outlet } from "react-router-dom";


const RootElement = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootElement;