import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

export default class RightNav extends Component {

    
    render() {

        return (
            <div>
                <Menu.Item header> Options </Menu.Item>
                <Menu.Item as='a'>Create Tracker</Menu.Item>
                <Menu.Item as='a'>Edit Tracker</Menu.Item>
                
         </div>
            
        )
    }
}
