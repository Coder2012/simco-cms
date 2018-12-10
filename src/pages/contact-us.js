import React from 'react'
import Layout from '../components/Layout'
import LayoutStyles from '../layout.module.scss'
import SettingsStyles from '../settings.module.scss'

const ContactUs = () => {
    return ( <Layout background={SettingsStyles.developmentsBg} layoutType={LayoutStyles.layoutSpacer}>
        <h2>Contact Us</h2>
    </Layout> );
}
 
export default ContactUs;