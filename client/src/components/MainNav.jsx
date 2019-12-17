import React, { Component } from 'react';
import {Menu,Icon} from 'semantic-ui-react';

export default class MainNav extends Component {

    state = {

    }

    handleItemClick= (e)=>function () {
        this.setState({ activeItem: e.name });
    };

    

    render() {
        const { activeItem } = this.state;
        const logostyle={
            textAlign:"center",
            paddingTop:"15px",
            fontSize:'24px',
            fontFamily:'Roboto',
        };
        return (
            <div>
                <Menu size='massive' attached='top'>
                    <Menu.Item
                        position='left'
                        name='trackers'
                        active={activeItem === 'trackers'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='eye' />
                    </Menu.Item>
                    
                    <div style={logostyle}> TrackEye</div>
                    
                    
                    <Menu.Item
                        position='right'
                        name='options'
                        active={activeItem === 'options'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='options' />
                    </Menu.Item>
                </Menu>

                
            </div>
        )

        
    }

   
}
