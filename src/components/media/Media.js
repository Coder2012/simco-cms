import React from 'react'
import Img from 'gatsby-image'

const Media = (props) => {
    console.log(props)
    return ( 
        <section>
            <Img fixed={props.image.childImageSharp.fixed} />
        </section>
     );
}
 
export default Media;