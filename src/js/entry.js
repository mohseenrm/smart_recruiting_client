'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import Profile from './Profile.jsx';

(()=>{
    const name = 'MoMo';
    console.log(`Hello ${name}! from webpack`);
	ReactDOM.render(<Profile />, document.getElementById('app'));
})();