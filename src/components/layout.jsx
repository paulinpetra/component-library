import React from "react";
import Hero from "./hero";

function Layout({ children }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}

export default Layout;
