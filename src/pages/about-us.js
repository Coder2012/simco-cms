import React from 'react';
import Layout from '../components/Layout';
import LayoutStyles from '../layout.module.scss'
import SettingsStyles from '../settings.module.scss'

const AboutUs = () => {
    return ( <Layout background={SettingsStyles.developmentsBg} layoutType={LayoutStyles.layoutSpacer}>
        <h2>About Us</h2>
        <p>Here is some information on our company</p>
    </Layout> );
}
 
export default AboutUs;