'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

(()=>{
    const name = 'MoMo';
    console.log(`Hello ${name}! from webpack`);
	ReactDOM.render(<App />, document.getElementById('app'));
})();