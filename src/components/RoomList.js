import React from "react";

import RoomDetail from "./RoomThumbnail.js";

const RoomList = props => {
  const { rooms, filterText } = props;

  const filteredRooms = rooms.filter(function(room) {
    return room.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
  });

  return (
    <div className="RoomContainer">
      {filteredRooms.map(room => (
        <RoomDetail key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
