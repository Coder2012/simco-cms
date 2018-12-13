import React from "react";
import Img from "gatsby-image";
import MediaLink from "./mediaLink";
import LayoutStyles from '../../layout.module.scss'
import Styles from "./media.module.scss";

const Media = props => {
  console.log(props);
  return (
    <section className={LayoutStyles.layoutFlexRow}>
      <section className={Styles.media}>
        <MediaLink title={props.title} />
        <Img fluid={props.image.childImageSharp.fluid} />
      </section>
      <section className={Styles.mediaContent}>
        <h2>Some title</h2>
        <p>some description</p>
      </section>
    </section>
  );
};

export default Media;
