import React, {Component} from "react";
import Table from "../Table";
import SearchForm from "../SearchForm";
import DB from "../../db/heroes.json";


class Directory extends Component {
  state ={
    //This will save all the super heroes that match whats entered into the search field.
    filteredList: [],
    search: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value })
  }
  
// If a power stat is listed as "null", this will change it to unk before adding it the directory
  handleNull = (heroStat) => {
    if (heroStat === "null") {
      return "unk"
    } else {
      return heroStat
    }
  }

  render() {
    return (
      <div>
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
        />
        <Table 
          tableRowCreater={this.tableRowCreater}
          handleNull={this.handleNull}
          fullList={DB}
        />
      </div>
    )
  }

}

export default Directory;