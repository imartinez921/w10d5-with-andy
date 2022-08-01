import React from 'react';
import ReactDOM from 'react-dom';
import Main from './frontend/main';

document.addEventListener("DOMContentLoaded", () => {
    console.log('hello world');
    const root = document.getElementById("root");

    ReactDOM.render(<Main />, root)

})