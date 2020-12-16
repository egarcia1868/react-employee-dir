import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <table id="supeTable">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          {/*<th>Stats</th>        adding this one once I find out how to do the stat spacing*/}
          <th>Alignment</th>
        </tr>
      </thead>
      <tbody>
        {props.fullList.map(hero => 
          <tr>
          <td><img style={{width: "75px"}} src={hero.image.url} alt=""/></td>
          <td>{hero.name}</td>
          <td>{hero.biography.alignment}</td>
        </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table