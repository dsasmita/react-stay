import React from "react";
/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";

import SearchBar from "./SearchBar.js";

class Header extends React.Component {
  render() {
    return (
      <header css={styles.header}>
        <nav>
          <ul css={styles.ul}>
            <Global styles={styles.li} />
            <li css={styles.title} id="title">
              Stay App
            </li>
            <li css={styles.search}>
              <SearchBar
                filterText={this.props.filterText}
                handleFilterText={this.props.handleFilterText}
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const styles = {
  header: css`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #444;
    margin-bottom: 10px;
  `,
  ul: css`
    list-style-type: none;
    font-size: 1.25em;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    padding: 0;
  `,
  li: css`
    li {
      margin: 0.5em;
    }
  `,
  title: css`
    margin-right: auto;
    font-weight: bold;
    font-size: 1em;
    text-shadow: 1px 1px 2px #cacaca;
    text-transform: uppercase;
  `,
  search: css``
};

export default Header;
