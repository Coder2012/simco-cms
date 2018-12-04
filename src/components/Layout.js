import React from "react";
import Header from "./header/Header";

const Layout = ({ layoutType, background, children }) => {
  return (
    <section className={background}>
      <Header />
      <section className={layoutType}>{children}</section>
    </section>
  );
};

export default Layout;
