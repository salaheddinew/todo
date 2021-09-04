import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import actions from "../actions/counter";
const Liste = (props) => {
  const history = useHistory();
  const selct = useSelector((state) => state.liste);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {selct.map((element) => {
          return (
            <div>
              <li>{element.tache}</li>;
              <button
                onClick={() => {
                  dispatch(actions.decrementCounter(element.id));
                }}
              >
                suprime
              </button>
              ;
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Liste;
