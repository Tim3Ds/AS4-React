import React from 'react';
import { render } from 'react-dom';
import App from './App';
import About from './About';
import './index.css';
// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router';


render(
  (
  <Router App={Link}>
    <Route path="/" component={App}/>
    <Route path="/About" component={About}/>
  </Router>
  ),
  document.getElementById('root')
);

let index = 0;
let changing = (dex) => {
  if(dex%2 === 1){
    document.getElementById('changeling').innerHTML = 
    `<div id='center'>Look At Me</div>`
    
  }else{
     document.getElementById('changeling').innerHTML = 
     `<div id='center'>You Blinked!</div>`
  }  
}

changing(index);
window.setInterval(()=>{
  changing(index++);
}, 2000);