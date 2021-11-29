import React from "react";
import { useContext } from 'react';
import BoxContext from "./BoxContext";
function Box({ color, width, height, id}) {
    const { options, setOptions } = useContext(BoxContext);
    const handleClick = (e) =>{
        e.preventDefault();
        const newBoxes = options.boxesState.filter(box => box.key !== id)
        options.setBoxes(newBoxes)
        setOptions({...options, boxesState:newBoxes})
    }
  return (
    <div>
      <div
        className="box" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px`, margin:'5px' }}>
      </div>
      <button id={id} onClick={handleClick}>X</button>
    </div>
  );
}

export default Box;
