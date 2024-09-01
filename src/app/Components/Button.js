import React from "react";
import '../CSS/Components/Button.css';

export default function Button({ text, onClick }) {
    return (
        <button class="button" onClick={onClick}>
        {text}
        </button>
    );
}