import React from "react";

const useSortableData = (heroes, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedHeroes = React.useMemo(() => {
    let sortableHeroes = [...heroes];
    if (sortConfig !== null) {
      sortableHeroes.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableHeroes;
  }, [heroes, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { heroes: sortedHeroes, requestSort, sortConfig };
};

function HeroTable(props) {
  const { heroes, requestSort, sortConfig } = useSortableData(props.supes);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  // const [sortConfig, setSortConfig] = React.useState(config);
  // const sortTypes = {
  //   up: {
  //     class: "sort-up",
  //     fn: (a,b) => a.props.sorter - b.props.sorter
  //   },
  //   down: {},
  //   default: {}
  // };
  // let sortedHeroes = [...heroes];
  // sortedHeroes.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   return 0;
  // });

  // React.useMemo(() => {
  //   let sortedHeroes = [...heroes];
  //   if (sortConfig !== null) {
  //     sortedHeroes.sort((a, b) => {
  //       if (a[sortConfig.key] < b[sortConfig.key]) {
  //         return sortConfig.direction === 'ascending' ? -1 : 1;
  //       }
  //       if (a[sortConfig.key] > b[sortConfig.key]) {
  //         return sortConfig.direction === 'ascending' ? 1 : -1;
  //       }
  //       return 0;
  //     });
  //   }
  //   return sortedHeroes;
  // }, [heroes, sortConfig]);

  // const useSortableData = (items, config = null) => {
  //   const [sortConfig, setSortConfig] = React.useState(config);
    
  //   const sortedItems = React.useMemo(() => {
  //     let sortableItems = [...items];
  //     if (sortConfig !== null) {
  //       sortableItems.sort((a, b) => {
  //         if (a[sortConfig.key] < b[sortConfig.key]) {
  //           return sortConfig.direction === 'ascending' ? -1 : 1;
  //         }
  //         if (a[sortConfig.key] > b[sortConfig.key]) {
  //           return sortConfig.direction === 'ascending' ? 1 : -1;
  //         }
  //         return 0;
  //       });
  //     }
  //     return sortableItems;
  //   }, [items, sortConfig]);
  
  //   const requestSort = key => {
  //     let direction = 'ascending';
  //     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
  //       direction = 'descending';
  //     }
  //     setSortConfig({ key, direction });
  //   }
  
  //   return { items: sortedItems, requestSort };
  // }
  
  
  return (
      <table>
        <thead>
          <tr>
            <th>
              Photo
            </th>
            <th>
              <button 
                type="button" 
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              > 
                Name
              </button>
            </th>
            <th>
              <button 
                type="button" 
                onClick={() => requestSort("full-name")}
                className={getClassNamesFor("full-name")}
              > 
                "Secret Identity"
              </button>
            </th>
            <th>
              <button 
                type="button" 
                onClick={() => requestSort("alignment")}
                className={getClassNamesFor("alignment")}
              > 
                Alignment
              </button>
            </th>
            <th>
              <button 
                type="button" 
                onClick={() => requestSort("publisher")}
                className={getClassNamesFor("publisher")}
                > 
                Publisher
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {heroes.map(s => 
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
      </table>
    )
}

export default HeroTable