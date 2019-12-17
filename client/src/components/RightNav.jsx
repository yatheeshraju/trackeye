import React, { Component } from 'react';
import {Menu,Sidebar} from 'semantic-ui-react';

export default class RightNav extends Component {

    state={
        visible:'',
    }

    render() {
        return (
            <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'>

                    <Menu.Item
                        name='ctracker'
                        active={activeItem === 'ctracker'}
                        onClick={this.handleItemClick}
                    >
                     Create Tracker    
                    </Menu.Item>
                    <Menu.Item
                        name='etracker'
                        active={activeItem === 'etracker'}
                        onClick={this.handleItemClick}
                    >
                     Edit Tracker    
                    </Menu.Item>
        </Sidebar>
            </div>
        )
    }
}
