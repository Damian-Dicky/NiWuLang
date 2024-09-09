import React from "react";
import '../CSS/Components/Button.css';

export default function Button({ text, onClick, inverse=false }) {
    return (
        <button className={inverse ? "inverse-button" : "button"} onClick={onClick}>
        {text}
        </button>
    );
}