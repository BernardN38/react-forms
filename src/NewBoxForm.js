import React, { useState, useContext } from "react";
import BoxContext from './BoxContext'
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ boxes, setBoxes }) {
  const initialFromData = {
    color: "",
    width: "",
    heigth: "",
  };
  const [formData, setFormData] = useState(initialFromData);
  const { options, setOptions } = useContext(BoxContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid()
    const newBox = <Box key={id} id={id} color={formData.color} width={formData.width} height={formData.heigth}/>
    setBoxes([...boxes, newBox]);
    setOptions(() => ({ ...options, boxesState:[...boxes, newBox] }));
  };
  return (
    <form>
      <label htmlFor="color" type="text">
        Background Color:
      </label>
      <input
        name="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width" type="text">
        Width:
      </label>
      <input
        name="width"
        type="text"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="heigth" type="text">
        Height:
      </label>
      <input
        name="heigth"
        type="text"
        value={formData.heigth}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default NewBoxForm;
