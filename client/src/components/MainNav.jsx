import React, { Component } from "react";
import { Menu, Icon, Sidebar, Segment} from "semantic-ui-react";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import RightNav from "./RightNav";
import CreateTracker from "./CreateTracker";
import EditTracker from "./EditTracker";
import Map from "./Map";

export default class MainNav extends Component {
  state = { visible: false };

  handleItemClick = e =>
    function() {
      this.setState({ activeItem: e.name });
    };
  handleSidebarHide = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });

  render() {
    const { activeItem } = this.state;
    const { visible } = this.state;
    const logostyle = {
      textAlign: "center",
      paddingTop: "15px",
      fontSize: "24px",
      fontFamily: "Roboto"
    };
    return (
      <div>
        <Router>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="right"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width={window.width}
          >
            <RightNav handleSidebarHide={this.handleSidebarHide}></RightNav>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu size="large" attached="top">
              <Menu.Item position="left" name="trackers">
                <Icon name="eye" />
              </Menu.Item>

              <div style={logostyle}> TrackEye</div>

              <Menu.Item
                position="right"
                name="options"
                active={activeItem === "options"}
                onClick={this.handleShowClick}
              >
                <Icon name="options" />
              </Menu.Item>
            </Menu>
            <Segment basic width={Window.width}>
                
                <Switch>
                  <Route path="/create">
                      <CreateTracker/>
                  </Route>
                <Route path="/edit">
                  <EditTracker/>
                </Route>
                <Route path="/map">
                  <Map/>
                </Route>
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Router>
      </div>
    );
  }
}
