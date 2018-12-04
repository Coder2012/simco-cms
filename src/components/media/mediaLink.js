import React from 'react';
import RightArrowIcon from '../../icons/right-arrow.svg'
import Styles from './media.module.scss'

const MediaLink = (props) => {
    return ( 
        <div className={Styles.mediaLink}>
        <img className={Styles.mediaIcon} src={RightArrowIcon} alt="arrow icon" />
            <h2>{props.title}</h2>
        </div>
     );
}
 
export default MediaLink;