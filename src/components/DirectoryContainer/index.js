import React, {Component} from "react";
import Table from "../Table";
import SearchForm from "../SearchForm";
import DB from "../../db/heroes.json";


class Directory extends Component {
  state ={
    //This will save all the super heroes that match whats entered into the search field.
    filteredList: [],
    search: "",
    filtered: false
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
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table 
          handleNull={this.handleNull}
          filteredList={this.state.filteredList}
        />
      </div>
    )
  }

}

export default Directory;