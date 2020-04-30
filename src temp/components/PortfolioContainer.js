import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  // loadPage() {
  //   switch(this.state.currentPage) {
  //     case "home":
  //       return <Home />;
  //     case "about":
  //       return <About />;
  //     case "blog":
  //       return <Blog />;
  //     case "contact":
  //       return <Contact />;
  //     default:
  //       return undefined
  //   };
  // };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavTabs
          />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default PortfolioContainer;
