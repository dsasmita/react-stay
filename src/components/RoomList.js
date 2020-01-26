import React from "react";

import RoomDetail from "./RoomThumbnail.js";

class RoomList extends React.Component {
  render() {
    const { rooms, filterText } = this.props;
    return (
      <div className="RoomContainer">
        {rooms.map(room => (
          <RoomDetail key={room.name} room={room} />
        ))}
      </div>
    );
  }
}

export default RoomList;
