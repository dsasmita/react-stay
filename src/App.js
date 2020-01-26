import React from "react";

import "./App.css";
import room from "./room.jpg";

import Header from "./components/Header.js";
import RoomList from "./components/RoomList.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: ""
    };
  }
  handleFilterText = filterText => {
    this.setState({
      filterText: filterText
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          filterText={this.state.filterText}
          handleFilterText={this.handleFilterText}
        />
        <RoomList rooms={ROOMS} filterText={this.state.filterText} />
      </div>
    );
  }
}

const ROOMS = [
  {
    name: "Beautiful Room",
    thumbnail: room
  },
  {
    name: "Clean Room",
    thumbnail: room
  },
  {
    name: "Snappy Room",
    thumbnail: room
  },
  {
    name: "Big Room",
    thumbnail: room
  },
  {
    name: "Minimalist Room",
    thumbnail: room
  },
  {
    name: "Huge Room",
    thumbnail: room
  }
];
export default App;
