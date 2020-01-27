import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import room from "./room.jpg";

import Header from "./components/Header.js";
import RoomDetail from "./components/RoomDetail.js";
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
        <Router>
          <RoomList path="/" rooms={ROOMS} filterText={this.state.filterText} />
          <RoomDetail path="room/:id" rooms={ROOMS} />
        </Router>
      </div>
    );
  }
}

const ROOMS = [
  {
    id: 1,
    name: "Beautiful Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 2,
    name: "Clean Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 3,
    name: "Snappy Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 4,
    name: "Big Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 5,
    name: "Minimalist Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 6,
    name: "Huge Room",
    thumbnail: room,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  }
];
export default App;
