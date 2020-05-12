import React from 'react';
import "./input.scss";
const onChanges = (event) => {
    event.persist();
    switch(event.target.name){
        case 'email': 
            
            if(event.target.value == "" || !event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i )){
                console.log('the value is wrong');
                event.target.className = "general-input__error";
            }
            else{
                console.log('perfect!');
                event.target.className = "general-input";
            }
            break;

        case 'message':
            
            if(event.target.value == ""){
                event.target.className = "message-input__error"
                console.log('Por favor llena este campo');
            }
            else{
                event.target.className = "message-input"
            }
            break;

        case 'submit':
            console.log(event.target.name)
            event.target.onClick = handleSubmit();
            break;
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
};

const Input = (props) =>{

    return(
        <input
        type={props.value.type}
        placeholder={props.value.placeholder}
        name={props.value.name}
        className={props.value.className}
        onChange={onChanges}
    />
    );
};

export default Input;
