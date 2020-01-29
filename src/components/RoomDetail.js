import React from "react";
import { Link } from "@reach/router";

const RoomDetail = props => {
  let { id, rooms } = this.props;

  const room = rooms.filter(function(room) {
    return room.id === parseInt(id);
  });
  return (
    <>
      {room.length === 1 && (
        <div>
          <h1>Room: {room[0]["name"]}</h1>
          <img src={room[0]["thumbnail"]} alt={room[0]["name"]} />
          <p>{room[0]["description"]}</p>
        </div>
      )}
      <Link to="/">Back</Link>
    </>
  );
};

export default RoomDetail;
