import React, { Component } from "react";
import Container from "../Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "../Card";
import SearchForm from "../SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../../utils/API";
import db from "../../db/heroes.json";
import ListedHero from "../ListedHero/ListedHero";
import "./style.css";

class SeekaSupe extends Component {
  state = {
    db,
    // result: {},
    search: ""
  };

  // componentDidMount() {
  //   this.searchMovies("Spider Man");
  // }

  handleInputChange = e => {
    // if (this.db !== undefined) {
      // console.log("hIC: "+this.state.db.length)
    //   }
    // const name = e.target.name;
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
      // this.searchSupes(this.state.search);
    }
  }

  // handleFormSubmit = e => {
  //   e.preventDefault();
  //   this.searchSupes(this.state.search);
  // }

  // searchSupes = query => {
  //   this.setState({ });
    
    
    
  //   //   .then(res => this.setState({ result: res.data }))
  //   //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container>
        <header>
          <h1>Welcome to Seek-a-Supe!</h1>
          <h3>Got a super problem that needs to be dealt with.  Search our database of super heroes <span>(and villains if it's a little on the "illegal" side)</span> and find someone better suited to handle it:</h3>
        </header>
        
          <SearchForm
            state={this.state.search}
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            // handleFormSubmit={this.handleFormSubmit}
          />
        
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
      </Container>
    );
  }
}

export default SeekaSupe;
