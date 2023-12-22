import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader";


const RootElement = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootElement;