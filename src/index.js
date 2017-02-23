import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import './index.css';
// using an ES6 transpiler, like babel
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  (
    //<App />
    //<About />
  <Router history={browserHistory}>
   <Route path="/" component={App}>
     <Route path="/About" component={About}/>
   </Route>
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