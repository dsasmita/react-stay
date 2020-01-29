import React from "react";

class SearchBar extends React.Component {
  handleFilterText = event => {
    this.props.handleFilterText(event.target.value);
  };
  render() {
    const { filterText } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="search..."
          onChange={this.handleFilterText}
          value={filterText}
        />{" "}
        <button type="button">Find</button>
      </form>
    );
  }
}

export default SearchBar;
