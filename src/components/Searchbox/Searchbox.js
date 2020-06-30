import React, { Component } from "react";

export default class Searchbox extends Component {
  state = { value: "" };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
