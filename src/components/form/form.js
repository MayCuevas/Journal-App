import React, { useState } from "react";
import "./form.scss";

import Input from "../inputs/input";
import inputData from "../../common/data/inputs";



const Form = () => {

    return (
        <div className="contact-holder">
            <h1>Contactanos</h1>
            <form  className="contact-form">
                <Input value={inputData.inputEmail} />
                <Input value={inputData.inputMessage} />
                <Input value={inputData.inputSubmit} />
            </form>
        </div>
    );
}

export default Form 