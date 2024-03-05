"use client"
import React from 'react';

function Button(props) {
    function handleClick() {
        console.log('Button clicked');
    }
    
    return (
        <button onClick={handleClick}>Click me</button>
    );
    
}

export default Button;