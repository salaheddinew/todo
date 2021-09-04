import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const Liste = (props) => {
  const history = useHistory();
  const selct = useSelector((state) => state.liste);
  return (
    <div>
      <ul>
        {selct.map((element) => {
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
