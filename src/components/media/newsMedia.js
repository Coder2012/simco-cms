import React from 'react'
import Img from 'gatsby-image'
import MediaLink from './mediaLink'
import Styles from './media.module.scss'

const NewsMedia = props => {
  console.log(props);
  return (
    <section className={Styles.media}>
      <Img fixed={props.data.image.childImageSharp.fixed} />
      <h2>{props.data.title}</h2>
      <p>{props.data.summary}</p>
      <p>{props.data.date}</p>
    </section>
  );
};

export default NewsMedia;
