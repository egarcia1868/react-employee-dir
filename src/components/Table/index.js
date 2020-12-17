import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <table id="supeTable">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>
            Power Stats
            <table style={{border: "none"}}>
              <thead>
                <tr>
                  <th className="statsL">
                    Int
                  </th>
                  <th className="statsL">
                    Str
                  </th>
                  <th className="statsL">
                    Spd
                  </th>
                  <th className="statsL">
                    Dur
                  </th>
                  <th className="statsL">
                    Pow
                  </th>
                  <th className="statsR">
                    Combat
                  </th>
                </tr>
              </thead>
            </table>
          </th>
          <th>Alignment</th>
        </tr>
      </thead>
      <tbody>
        {props.filteredList.map(hero => 
          <tr key={hero.id}>
            <td><img src={hero.image.url} alt=""/></td>
            <td>{hero.name}</td>
            <td>
              <table style={{border: "none"}}>
                <thead>
                  <tr>
                    <th className="statsL">
                      Int
                    </th>
                    <th className="statsL">
                      Str
                    </th>
                    <th className="statsL">
                      Spd
                    </th>
                    <th className="statsL">
                      Dur
                    </th>
                    <th className="statsL">
                      Pow
                    </th>
                    <th className="statsR">
                      Combat
                    </th>
                  </tr>
                </thead>
              </table>
              <table style={{border: "none"}}>
                <thead>
                  <tr>
                    <th className="statsL">
                      {props.handleNull(hero.powerstats.intelligence)}
                    </th>
                    <th className="statsL">
                      {props.handleNull(hero.powerstats.strength)}
                    </th>
                    <th className="statsL">
                      {props.handleNull(hero.powerstats.speed)}
                    </th>
                    <th className="statsL">
                      {props.handleNull(hero.powerstats.durability)}
                    </th>
                    <th className="statsL">
                      {props.handleNull(hero.powerstats.power)}
                    </th>
                    <th className="statsR">
                      {props.handleNull(hero.powerstats.combat)}
                    </th>
                  </tr>
                </thead>
              </table>
            </td>
            <td>{hero.biography.alignment}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table