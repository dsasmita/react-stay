import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";

class RoomThumbnail extends React.Component {
  render() {
    const { room } = this.props;
    return (
      <div className="ProductList">
        <div>
          <img className="ProductImage" alt="room-1" src={room.thumbnail} />
        </div>
        <div css={styles.container}>
          <h1 css={styles.title}>{room.name}</h1>
          <Link to={"room/" + room.id} css={styles.link} className="ProducLink">
            View Detail >>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  container: css`
    display: flex;
  `,
  title: css`
    font-size: 1em;
    padding: 5px;
    margin: 0;
  `,
  link: css`
    font-size: 1em;
    padding: 5px;
    margin: 0;
  `
};

export default RoomThumbnail;
