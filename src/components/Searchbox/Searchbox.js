import React, { Component } from "react";

import { INITIAL_STATE_SEARCHBOX } from "../helpers/constants";

import "../Searchbox/Searchbox.module.css";

export default class Searchbox extends Component {
  state = { ...INITIAL_STATE_SEARCHBOX };

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
