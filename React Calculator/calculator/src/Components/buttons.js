import React from 'react';
import "./buttons.css";

const isOperator = digit => {
return !isNaN(digit) || digit === "." || digit === "=";
}

const buttons = props => <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
        >{props.children} </div>;

export default buttons;