/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";

const RoomThumbnail = props => (
  <div className="ProductList">
    <div>
      <img className="ProductImage" alt="room-1" src={props.room.thumbnail} />
    </div>
    <div css={styles.container}>
      <h1 css={styles.title}>{props.room.name}</h1>
      <Link
        to={"room/" + props.room.id}
        css={styles.link}
        className="ProducLink"
      >
        View Detail >>
      </Link>
    </div>
  </div>
);

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
