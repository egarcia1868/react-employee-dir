import React, { Component } from "react";
import Container from "../Container/Container";
import HeroTable from "../HeroTable/HeroTable"
import SearchForm from "../SearchForm/SearchForm";
import db from "../../db/heroes.json";
import API from "../../utils/API";
import "./style.css";


class SeekaSupe extends Component {
  state = {
    db,
    search: ""
  };

  handleInputChange = e => {
    const value = e.target.value;
    if (value.trim() === "") {
      this.setState({
        search: "",
        db
      })
    } else {
      this.setState({
        search: value,
        db: API.search(value)
      });
    }
  };

  // sorter = (a, b) => {
  //   if (a === undefined) {
  //     return -1
  //   } else if (b === undefined) {
  //     return 1
  //   } else if (a === b) {
  //     return 0
  //   } else {
  //     return a - b
  //   }
  // }

  // db.sort(sorter)

  handleSort = (columnTitle) => {
    let sortArray;
    const toggle = !this.state.ascending;
    if(toggle) {
      sortArray = this.state.db.sort((a, b) => (a[columnTitle].toLowerCase() > b[columnTitle].toLowerCase()) ? 1 : -1)
    } else {
      sortArray = this.state.db.sort((a, b) => (b[columnTitle].toLowerCase() > a[columnTitle].toLowerCase()) ? 1 : -1)
    }
    this.setState( { db: sortArray, ascending: toggle } );
  }

  render() {
    return (
      <Container>
        <header>
          <h1>Welcome to Seek-a-Supe!</h1>
          <h3>Got a super problem that needs to be dealt with?  Search our database of super heroes <span>(and villains if it's a little on the "illegal" side)</span> and find someone better suited to handle it:</h3>
        </header>
        
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          
      <table>
      <thead>
        <tr>
          <th>
            Photo
          </th>
          <th onClick={() => this.handleSort("name")}>Name<i className="fas fa-arrows-alt-v"></i></th>
          <th>"Secret" Identity</th>
          <th>Alignment</th>
          <th>Publisher</th>
        </tr>
      </thead>
      
    <HeroTable 
    // handleSort={this.handleSort} 
    supes={this.state.db} 
    />        
    
    </table>

      </Container>
    );
  }
}

export default SeekaSupe;
