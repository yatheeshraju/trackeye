import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
const axios = require('axios');

export default class LeftNav extends Component {
  state = {};
  trackers=[];
  getTrackers=()=>{ 
  axios.get('/trackers')
  .then((response)=> {
    this.setState({data:response.data}) 
    this.trackers=this.state.data.map((element )=> 
      <Menu.Item key={element._id} >
      <Link to={{pathname:"/map",cords:{cords:element.cords}}}  onClick={this.props.handleSidebarHide}>{element.name}</Link>
    </Menu.Item>
    );
  
  })
  .catch(function (error) {

    console.log(error);
  })
};

  componentDidMount(){
    this.getTrackers();
  }


  render() {
    
    return (
    <div>{this.trackers}</div>
      
    )
}
}
