import React, { Component } from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import { Link} from 'react-router-dom';

export default class RightNav extends Component {

    
    render() {

        var iconStyle={
           paddingRight: 30 ,
        };

        return (
            <div>
                
                <Menu.Item header > Options </Menu.Item>
                <Menu.Item  > <Link to="/map" onClick={this.props.handleSidebarHide}> <Icon name='map' style={iconStyle}></Icon>Map</Link></Menu.Item>
                <Menu.Item > <Link to="/create" onClick={this.props.handleSidebarHide}><Icon name='crosshairs' style={iconStyle}></Icon>Create Tracker</Link></Menu.Item>
                <Menu.Item > <Link to="/update" onClick={this.props.handleSidebarHide}><Icon name='edit' style={iconStyle}></Icon>Update Tracker</Link></Menu.Item>
                <Menu.Item > <Link to="/setkey" onClick={this.props.handleSidebarHide}><Icon name='key' style={iconStyle}></Icon>Set GMaps Key</Link></Menu.Item>

          </div>
            
        )
    }
}
