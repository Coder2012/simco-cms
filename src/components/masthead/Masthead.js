import React from "react";
import Styles from "./masthead.module.scss";

const Masthead = (props) => {
  return (
    <section className={Styles.masthead}>
      <a href="#">
        <h1>Simco</h1>
      </a>
      <button type="button" onClick={props.clickHandler}>
        Menu
      </button>
    </section>
  );
};

export default Masthead;
