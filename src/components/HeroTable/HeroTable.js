import React from "react";
import "./style.css"

// const useSortableData = (heroes, config = null) => {
//   const [sortConfig, setSortConfig] = React.useState(config);

//   const sortedHeroes = React.useMemo(() => {
//     let sortableHeroes = [...heroes];
//     if (sortConfig !== null) {
//       sortableHeroes.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableHeroes;
//   }, [heroes, sortConfig]);

//   const requestSort = (key) => {
//     let direction = 'ascending';
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === 'ascending'
//     ) {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   return { heroes: sortedHeroes, requestSort, sortConfig };
// };

function HeroTable(props) {
  // const { heroes, requestSort, sortConfig } = useSortableData(props.supes);
  // const getClassNamesFor = (name) => {
  //   if (!sortConfig) {
  //     return;
  //   }
  //   return sortConfig.key === name ? sortConfig.direction : undefined;
  // };
  
  return (
        <tbody>
          {props.supes.map(s => 
            <tr key={s.id}>
              <td><img src={s.image.url} className="heroImage" alt={s.name} /></td>
              <td>{s.name}</td>
              <td>{s.biography["full-name"]}</td>
              <td>{s.biography.alignment}</td>
              <td>{s.biography.publisher}</td>
            </tr>
            // <ListedHero 
            //   key={s.id}
            //   id={s.id}
            //   name={s.name}
            //   fullName={s.biography["full-name"]}
            //   alignment={s.biography.alignment}
            //   publisher={s.biography.publisher}
            //   image={s.image.url}
            // />
            )
          }
        </tbody>
    )
}

export default HeroTable