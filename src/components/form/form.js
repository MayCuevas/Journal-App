import React, { useState } from "react";
import "./form.scss";

const Form = () => {

    const [form, setState] = useState({
        email: '',
        message: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form.message)
    };

    const onChanges = (event) => {
        event.persist();
        setState({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="contact-holder">
            <h1>Contactanos</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="label"
                    placeholder="Email"
                    name="email"
                    required
                    className="contact-form__input"
                    onChange={onChanges}
                />
                <input
                    type="text"
                    placeholder="Dejanos tu mensaje"
                    name="message"
                    required
                    className="contact-form__input"
                    onChange={onChanges}
                />
                <input
                    className="contact-form__button"
                    type="submit"
                />
            </form>
        </div>
    );
}

export default Form 