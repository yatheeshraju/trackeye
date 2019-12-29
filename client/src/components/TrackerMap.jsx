import React, { Component } from 'react';
const axios = require('axios');

export default class TrackerMap extends Component {
    state={
        tracker:{}
    }
    trackers=[{}];
    tracker={};
    getTrackerData=()=>{ 
        axios.get(`/tracker/${this.props.match.params.id}`)
        .then((response)=> {
         this.trackers=response.data;
         this.tracker=this.trackers[0];
         
         this.setState({tracker:this.tracker});
        })
        .catch(function (error) {
      
          console.log(error);
        })
      };

      componentDidMount(){
          this.getTrackerData();
      }

    render() {     
        return (
            <div style={{minHeight:window.innerHeight}} >
                {this.state.tracker.name}<br/>
                {this.state.tracker._id}<br/>
                {this.state.tracker.location}<br/>
            </div>
        )
    }
}