import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <div>
      <p>Click on any of the categories (except "Photo") to reorganize the current list.  Click on each individual Power Stat to reorganize</p>
      <table id="supeTable">
        <thead>
          <tr>
            <th>Photo</th>
            <th data-sort-by="name" onClick={props.handleSorter} className="sort">Name</th>
            <th>
              Power Stats
              <table style={{border: "none"}}>
                <thead>
                  <tr>
                    <th data-sort-by="intelligence" onClick={props.handleSorter} className="statsL sort">
                      Int
                    </th>
                    <th data-sort-by="strength" onClick={props.handleSorter} className="statsL sort">
                      Str
                    </th>
                    <th data-sort-by="speed" onClick={props.handleSorter} className="statsL sort">
                      Spd
                    </th>
                    <th data-sort-by="durability" onClick={props.handleSorter} className="statsL sort">
                      Dur
                    </th>
                    <th data-sort-by="power" onClick={props.handleSorter} className="statsL sort">
                      Pow
                    </th>
                    <th data-sort-by="combat" onClick={props.handleSorter} className="statsR sort">
                      Combat
                    </th>
                  </tr>
                </thead>
              </table>
            </th>
            <th data-sort-by="alignment" onClick={props.handleSorter} className="sort">Alignment</th>
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
    </div>
  )
}

export default Table