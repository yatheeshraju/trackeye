import React, { Component } from 'react'
export default class Map extends Component {
    state={
        cords:''
    }
    render() {
        return (
            <div style={{minHeight:window.innerHeight}} >
                Map Page
                <p>{this.props.location}</p>
            </div>
        )
    }
}
