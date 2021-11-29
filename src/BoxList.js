import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import BoxContext from "./BoxContext";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const [options, setOptions] = useState({
    boxesState: [],
    setBoxes: setBoxes,
  });
  return (
    <BoxContext.Provider value={{ options, setOptions }}>
      <div>
        <NewBoxForm boxes={boxes} setBoxes={setBoxes} />
        <div style={{ display: "flex" }}>{boxes}</div>
      </div>
    </BoxContext.Provider>
  );
}

export default BoxList;
