import React from 'react';
import "./contact.scss";

import Form from '../../components/form/form'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const ContactLayout = () => {
return(
    <div className ="contact-container">
        <Header />
        <h1>Contact us </h1>
        <Form />
        <Footer />
    </div>
    );
}

export default ContactLayout;