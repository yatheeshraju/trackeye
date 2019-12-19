import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import { Link} from 'react-router-dom';

export default class RightNav extends Component {

    
    render() {

        return (
            <div>
                <Menu.Item header> Options </Menu.Item>
                <Menu.Item > <Link to="/map" onClick={this.props.handleSidebarHide}> Map</Link></Menu.Item>
                <Menu.Item > <Link to="/create" onClick={this.props.handleSidebarHide}>Create Tracker</Link></Menu.Item>
                <Menu.Item > <Link to="/edit" onClick={this.props.handleSidebarHide}>Edit Tracker</Link></Menu.Item>
               
                
         </div>
            
        )
    }
}
