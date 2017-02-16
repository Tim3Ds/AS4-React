import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Tile from './TileList.js';

const bookInfo =  [{
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
},{
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
}];

ReactDOM.render(
  //<App />,
  <Tile list={bookInfo} />,
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