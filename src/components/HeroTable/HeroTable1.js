import React from "react";

function HeroTable(props) {
  const { heroes } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>"Secret Identity"</th>
          <th>Alignment</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
      {this.state.db.map(s => 
      <ListedHero 
        key={s.id}
        id={s.id}
        name={s.name}
        fullName={s.biography["full-name"]}
        alignment={s.biography.alignment}
        publisher={s.biography.publisher}
        image={s.image.url}
        />)}
      </tbody>
    </table>
  );
}

export default HeroTable