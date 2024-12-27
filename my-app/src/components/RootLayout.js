import React from "react";
import { Outlet } from "react-router-dom";
import NavBarpanel from "./NavBarpanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarpanel />{" "}
        <main className="d-flex justify-content-center">
          <Outlet />
        </main>{" "}
      </Provider>{" "}
    </>
  );
};

export default RootLayout;
