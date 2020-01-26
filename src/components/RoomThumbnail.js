import React from "react";

class RoomThumbnail extends React.Component {
  render() {
    const { room } = this.props;
    return (
      <div className="ProductList">
        <div>
          <img className="ProductImage" alt="room-1" src={room.thumbnail} />
        </div>
        <div>
          <h1 className="ProductTitle">{room.name}</h1>
        </div>
      </div>
    );
  }
}

export default RoomThumbnail;
