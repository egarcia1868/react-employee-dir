import React, { useState, useEffect } from "react";
import Table from "../Table";
import SearchForm from "../SearchForm";
import DB from "../../db/heroes.json";

const Directory = () => {
    //This will save all the super heroes that match whats entered into the search field.
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const [sorter, setSorter] = useState("asc");
  const [category, setCategory] = useState("name");

  // This will change what is shown in the search field as you type
  const handleInputChange = event => {
    const value = event.target.value;
    setSearch( value )
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    //this will create a new array of supes that include the searched entry
    setFilteredList( DB.filter(supe => supe.name.toLowerCase().includes(search.toLowerCase())))
  }

  const statComparer = (list, statBase, stat, num1, num2) => {

    return list.sort((a, b) => {
      // This will check to see if the stat is a number or "unk".  If "unk" it will send that supe to the bottom
      if (isNaN(a[statBase][stat])) {
        return 1
      } else { 
        // After making sure the stat is not "unk", this will order the supes in ascending or descending order.
        return parseInt(a[statBase][stat]) > parseInt(b[statBase][stat]) ? num1 : num2 
      }
    })
  }

  const handleSorter = event => {
    const sortBy = event.target.dataset.sortBy;

    // This function is to exercise DIY since this function framework will be used a lot in the resorting

    //THIS IS NOT WORKING.  MAY COME BACK!!!!!!! 

    // const orderFlipper = (num1, num2, category, order) => {
    //   this.setState({filteredList: this.state.filteredList.sort((a, b) => (a.category > b.category) ? num1 : num2), sorter: [category, order]})
    // }


    // This will determine which way the chart is currently being sorted and reverse it
    if (sorter === "asc" || sortBy !== category) {
      setSorter( "des" );
      // Since some of the things we'll be sorting by are more nested in the JSON than others, we need to do different things to sort depending on which is clicked.  This is where the switch statement comes in.
      switch(sortBy) {
        case "name":
          setFilteredList( filteredList.sort((a, b) => (a.name > b.name) ? -1 : 1));
          setCategory("name");
          break;

        case "alignment":
          const first = [];
          const second = [];
          const third = [];
          // this will seperate the supes into groups based on their alignment
          for(let i = 1; i < filteredList.length; i++) {
            if (filteredList[i].biography.alignment === "bad") {
              first.push(filteredList[i])
            } else if (filteredList[i].biography.alignment === "neutral") {
              second.push(filteredList[i])
            } else {
              third.push(filteredList[i])
            }
          };
          setFilteredList( third.concat(second, first));
          setCategory("alignment");
          break;

        case "intelligence":
          setFilteredList( statComparer(filteredList, "powerstats", "intelligence", -1, 1));
          setCategory("intelligence");
          break;

        case "strength":
          setFilteredList( statComparer(filteredList, "powerstats", "strength", -1, 1));
          setCategory("strength");
          break;
          
        case "speed":
          setFilteredList( statComparer(filteredList, "powerstats", "speed", -1, 1));
          setCategory("speed");
          break;

        case "durability":
          setFilteredList( statComparer(filteredList, "powerstats", "durability", -1, 1));
          setCategory("durability");
          break;

        case "power":
          setFilteredList( statComparer(filteredList, "powerstats", "power", -1, 1));
          setCategory("power");
          break;

        case "combat":
          setFilteredList( statComparer(filteredList, "powerstats", "combat", -1, 1));
          setCategory("combat");
          break;

        default:
          break;
      }
    } else {
      setSorter( "asc" );
      switch(sortBy) {
        case "name":
          setFilteredList( filteredList.sort((a, b) => (a.name > b.name) ? 1 : -1));
          break;

        case "alignment":
          const first = [];
          const second = [];
          const third = [];
          // this will seperate the supes into groups based on their alignment
          for(let i = 1; i < filteredList.length; i++) {
            if (filteredList[i].biography.alignment === "bad") {
              first.push(filteredList[i])
            } else if (filteredList[i].biography.alignment === "neutral") {
              second.push(filteredList[i])
            } else {
              third.push(filteredList[i])
            }
          };
          setFilteredList( first.concat(second, third));
          break;

        case "intelligence":
          setFilteredList( statComparer(filteredList, "powerstats", "intelligence", 1, -1));
          break;

        case "strength":
          setFilteredList( statComparer(filteredList, "powerstats", "strength", 1, -1));
          break;
          
        case "speed":
          setFilteredList( statComparer(filteredList, "powerstats", "speed", 1, -1));
          break;

        case "durability":
          setFilteredList( statComparer(filteredList, "powerstats", "durability", 1, -1));
          break;

        case "power":
          setFilteredList( statComparer(filteredList, "powerstats", "power", 1, -1));
          break;

        case "combat":
          setFilteredList( statComparer(filteredList, "powerstats", "combat", 1, -1));
          break;

        default:
          break;
      }
    }
  }

  const handleNull = (heroStat) => {
    if (heroStat === "null") {
      return "unk"
    } else {
      return heroStat
    }
  }

  useEffect(() => {
    setFilteredList( DB )
  }, [])


  return (
    <div className="container">
      <h1>
        Welcomd to Seek-a-Supe!
      </h1>
      <h2>
        Got a super problem that needs to be dealt with?  Search our database of super heroes (and villians if the task is a little on the shady side) and find someone better suited to handle it:
      </h2>
      <SearchForm 
        handleInputChange={handleInputChange}
        value={search}
        filteredList={filteredList}
        fullList={DB}
        handleFormSubmit={handleFormSubmit}
      />
      <Table 
        handleSorter={handleSorter}
        handleNull={handleNull}
        filteredList={filteredList}
        // checkForOrder={this.checkForOrder}
      />
    </div>
  )

}

export default Directory;