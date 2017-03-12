'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import RecruiterProfile from './RecruiterProfile.jsx';

(()=>{
    const name = 'MoMo';
    console.log(`Hello ${name}! from webpack`);
	ReactDOM.render(<RecruiterProfile />, document.getElementById('app'));
})();