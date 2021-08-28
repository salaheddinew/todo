import React, { useState } from "react";
import { nanoid } from "nanoid";
import Liste from "./Liste";
const Barre = (props) => {
  const [Val, setVal] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const plus = { id: nanoid(), tache: Val };
          props.change([...props.List, plus]);
          setVal("");
        }}
      >
        {" "}
        <input
          value={Val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Barre;
