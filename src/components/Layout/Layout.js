import React from "react";

import Header from "../Header/Header";

import "./Layout.module.css";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
