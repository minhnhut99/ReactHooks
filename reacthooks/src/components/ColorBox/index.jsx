 import React, {useState} from 'react';
 import PropTypes from 'prop-types';
 import './ColorBox.scss';
 
 ColorBox.propTypes = {
    
 };
 
 function ColorBox() {
    const [color, setColor] = useState(() => {
       const initialColor = localStorage.getItem('box-color') || 'deeppink';
       return initialColor;
   });
   
   function getRandomColor() {
      const COLOR_LIST = ['yellow', 'orange', 'green', 'brown', 'purple'];
      const colorRandomIndex = Math.trunc(Math.random() * 5);
       return COLOR_LIST[colorRandomIndex];
   }

   function handlerBoxClick() {
      // get random color => set color
      const newColor = getRandomColor();
      setColor(newColor);
      localStorage.setItem('box-color', newColor);
   }
   return (
      <>
      <h1 className='box-heading'>Click box!</h1>
      <div 
         className='color-box'
         style={{ backgroundColor: color }}
         onClick={handlerBoxClick}
      >
      </div>
      </>
   );
 }
 
 export default ColorBox;