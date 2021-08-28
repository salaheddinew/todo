import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
const Liste = (props) => {
  const history = useHistory();

  return (
    <div>
      <ul>
        {props.do.map((element) => {
          return (
            <li
              onClick={() => {
                history.push(`/details/${element.id}`);
              }}
            >
              {element.tache}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Liste;
