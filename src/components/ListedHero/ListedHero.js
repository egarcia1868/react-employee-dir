import React from "react";
import "./style.css";

function ListedHero(props) {
  if (!props.image) {
    return
  } else {
  return (
    <tr>
      <td><img src={props.image} className="heroImage" alt={props.name} /></td>
      <td>{props.name}</td>
      <td>{props.fullName}</td>
      <td>{props.alignment}</td>
      <td>{props.publisher}</td>
    </tr>
  )};
}

export default ListedHero