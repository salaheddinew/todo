import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
const Details = (props) => {
  const { id } = useParams();
  return <div>{id && props.list.find((elem) => elem.id == id)?.tache}</div>;
};

export default Details;
