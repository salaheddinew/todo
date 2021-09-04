import React, { useState } from "react";
import { nanoid } from "nanoid";
import Liste from "./Liste";
import action from "../actions/counter";
import { useDispatch } from "react-redux";

const Barre = (props) => {
  const [Val, setVal] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const plus = { id: nanoid(), tache: Val };

          dispatch(action.incrementCounter(plus));
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
