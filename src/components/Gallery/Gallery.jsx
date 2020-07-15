import React from 'react';
import firstCat from './media/firstCat.svg';
import secondCat from './media/secondCat.svg';
import thirdCat from './media/thirdCat.svg';
import './Gallery.css';

export default function Login() {
  return (
      <div className="container margin-top-50">
        <div className="gallery">
          <img src={firstCat} alt="первый котик"/>
          <img src={secondCat} alt="второй котик"/>
          <img src={thirdCat} alt="третий котик"/>
        </div>
      </div>
  );
}