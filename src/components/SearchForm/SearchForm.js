import React from "react";

function SearchForm(props) {
  // console.log("hIC: "+props.state)
  
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by Hero name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
