import React from "react";

const SearchForm = (props) => {
  return (
    <form style={{width: "100%"}} autoComplete="off">
      <div className="form-group autocomplete">
        <label htmlFor="search"><strong>Search:</strong></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          list="supes"
          type="text"
          className="form-control"
          placeholder="Type in the name of the supe you'd like to find"
          id="search"
        />
        <datalist id="supes">
          {props.fullList.map(supe => (
            <option value={supe.name} key={supe.id} />
          ))}
        </datalist>
        <button style={{float: "right", margin:"1% 0 2%"}} onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm