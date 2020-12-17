import React, {Component} from "react";
import Table from "../Table";
import SearchForm from "../SearchForm";
import DB from "../../db/heroes.json";

class Directory extends Component {
  state ={
    //This will save all the super heroes that match whats entered into the search field.
    filteredList: [],
    search: "",
    sorter: ["alignment","asc"],
    // alignment: [[],[],[]]
  }

  // This will change what is shown in the search field as you type
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //this will create a new array of supes that include the searched entry
    this.setState({filteredList: DB.filter(supe => supe.name.includes(this.state.search))})
  }

  //  NEED TO EXPAND UPON THIS FOR POWER STATS.  WILL ONLY WORK WITH NAME AND AFFINITY RIGHT NOW
  handleSorter = event => {
    const sortBy = event.target.dataset.sortBy;

    // This function is to exercise DIY since this function framework will be used a lot in the resorting

    //THIS IS NOT WORKING.  MAY COME BACK!!!!!!! 

    // const orderFlipper = (num1, num2, category, order) => {
    //   this.setState({filteredList: this.state.filteredList.sort((a, b) => (a.category > b.category) ? num1 : num2), sorter: [category, order]})
    // }

    // if (sortBy === this.state.sorter[0]) {


      // Since some of the things we'll be sorting by are more nested in the JSON than others, we need to do different things to sort depending on which is clicked.  This is where the switch statement comes in.
      switch(sortBy) {
        case "name":
          // This will determine which way the chart is currently being sorted and reverse it
          if (this.state.sorter[1] === "asc") {
            // orderFlipper(-1, 1, "name", "des");
            
            // Below is essentially what the above code equates to
            this.setState({filteredList: this.state.filteredList.sort((a, b) => (a.name > b.name) ? -1 : 1), sorter: ["name", "des"]})
          } else {
            // orderFlipper(1, -1, "name", "asc");
            this.setState({filteredList: this.state.filteredList.sort((a, b) => (a.name > b.name) ? 1 : -1), sorter: ["name", "asc"]})
          }
          break;
        case "alignment":
          const first = [];
          const second = [];
          const third = [];
          const filteredList = this.state.filteredList
          // this will seperate the supes into groups based on their alignment
          for(let i = 1; i < filteredList.length; i++) {
            if (filteredList[i].biography.alignment === "bad") {
              first.push(filteredList[i])
            } else if (filteredList[i].biography.alignment === "neutral") {
              second.push(filteredList[i])
            } else {
              third.push(filteredList[i])
            }
          }
          if (this.state.sorter[1] === "asc") {
            this.setState({filteredList: first.concat(second, third), sorter: ["alignment", "des"]})
          } else {
            this.setState({filteredList: third.concat(second, first), sorter: ["alignment", "asc"]})
          }
          break;
        default:
          break;
      // }

      
    }
  }
  
// If a power stat is listed as "null", this will change it to unk before adding it the directory
  handleNull = (heroStat) => {
    if (heroStat === "null") {
      return "unk"
    } else {
      return heroStat
    }
  }

  componentDidMount() {
    this.setState({filteredList: DB})
  }

  render() {
    return (
      <div className="container">
        <h1>
          Welcomd to Seek-a-Supe!
        </h1>
        <h2>
          Got a super problem that needs to be dealt with?  Search our database of super heroes (and villians if the task is a little on the shady side) and find someone better suited to handle it:
        </h2>
        <SearchForm 
          handleInputChange={this.handleInputChange}
          value={this.state.search}
          filteredList={this.state.filteredList}
          fullList={DB}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table 
          handleSorter={this.handleSorter}
          handleNull={this.handleNull}
          filteredList={this.state.filteredList}
          // checkForOrder={this.checkForOrder}
        />
      </div>
    )
  }

}

export default Directory;