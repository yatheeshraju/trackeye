import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class LeftNav extends Component {
  state = {};

  render() {
    return (
      <div>
        <Menu.Item >
          <Link to="/map"> Tracker1</Link>
        </Menu.Item>
      </div>
    );
  }
}
