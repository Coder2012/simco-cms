import React from 'react'
import Img from 'gatsby-image'
import MediaLink from './mediaLink'
import Styles from './media.module.scss'

const Media = props => {
  console.log(props);
  return (
    <section className={Styles.media}>
      <MediaLink title={props.title} />
      <Img fluid={props.image.childImageSharp.fluid} />
    </section>
  );
};

export default Media;
