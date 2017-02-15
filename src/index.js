import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <App />,
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