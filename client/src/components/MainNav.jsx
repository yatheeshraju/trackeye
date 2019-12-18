import React, { Component } from "react";
import { Menu, Icon, Sidebar, Segment, Header, Image } from "semantic-ui-react";
import RightNav from "./RightNav";

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
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="right"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <RightNav></RightNav>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu size="massive" attached="top">
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
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
