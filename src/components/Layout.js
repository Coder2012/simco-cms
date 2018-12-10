import React from "react";
import Header from "./header/Header";
import Footer from './footer/Footer'
import LayoutStyles from '../layout.module.scss'

const Layout = ({ layoutType, background, children }) => {
  return (
    <section className={[background, LayoutStyles.layoutMax].join(' ')}>
      <Header />
      <section className={layoutType}>{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
