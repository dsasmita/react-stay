import React from "react";

import RoomDetail from "./RoomThumbnail.js";

class RoomList extends React.Component {
  render() {
    const { rooms, filterText } = this.props;

    const filteredRooms = rooms.filter(function(room) {
      return room.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    });

    return (
      <div className="RoomContainer">
        {filteredRooms.map(room => (
          <RoomDetail key={room.name} room={room} />
        ))}
      </div>
    );
  }
}

export default RoomList;
