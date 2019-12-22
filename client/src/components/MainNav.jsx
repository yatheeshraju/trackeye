import React, { Component } from "react";
import { Menu, Icon, Sidebar, Segment} from "semantic-ui-react";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import RightNav from "./RightNav";
import CreateTracker from "./CreateTracker";
import EditTracker from "./EditTracker";
import Map from "./Map";
import LeftNav from "./LeftNav";
import Home from "./Home";

export default class MainNav extends Component {
  state = { visible: false ,leftvisible:false};

  handleItemClick = e =>
    function() {
      this.setState({ activeItem: e.name });
    };
  handleSidebarHide = () => this.setState({ visible: false });
  handleLeftSidebarHide = () => this.setState({ leftvisible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleLeftShowClick = () => this.setState({ leftvisible: true });


  render() {
    const { activeItem } = this.state;
    const { visible } = this.state;
    const {leftvisible}=this.state;
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
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            onHide={this.handleLeftSidebarHide}
            vertical
            visible={leftvisible}
            width={window.width}
          >
            <LeftNav trackers={this.listOfTrackers}handleSidebarHide={this.handleLeftSidebarHide}></LeftNav>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu size="large" attached="top">
              <Menu.Item position="left" name="trackers"
              active={activeItem === "options"}
              onClick={this.handleLeftShowClick}>
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
            <Segment basic >
                
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
                <Route path="/">
                      <Home/>
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
