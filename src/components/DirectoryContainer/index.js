import React, {Component} from "react";
import Table from "../Table";
import DB from "../../db/heroes.json"


class Directory extends Component {
  state ={
    //fullList is a placeholder.  Will use full db list once everything is functioning
    filteredList: []
  }

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
        {/* input field here */}
        <Table 
        filteredList={this.state.filteredList}
        fullList={DB}
        tableRowCreater={this.tableRowCreater}
        handleNull={this.handleNull}
        />
      </div>
    )
  }

}

export default Directory;