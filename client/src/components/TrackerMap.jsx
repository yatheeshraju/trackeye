import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';

const axios = require('axios');


export default class TrackerMap extends Component {
    constructor(props){
        super(props);
        this.state={
            tracker:{},
            key:'',
            mapimg:'',
            trackerid:this.props.match.params.id
        }
        
    }
    
    trackers=[{}];
    tracker={};

    getTrackerData=()=>{ 
         axios.get(`/tracker/${this.props.match.params.id}`)
        .then((response)=> {
         this.trackers=response.data;
         this.tracker=this.trackers[0];
         
         this.setState({tracker:this.tracker});
         this.setState({mapimg:`https://maps.googleapis.com/maps/api/staticmap?markers=${this.state.tracker.location}&zoom=15&size=${window.innerWidth}x${window.innerHeight}&maptype=roadmap
         &key=${this.state.key}`});
        })
        .catch(function (error) {
      
          console.log(error);
        })
      };
      componentDidMount(){
          this.setState({key:localStorage.getItem('gmapsKey')});
      }
      autoRefresh=()=>{
            this.getTrackerData();
      }


    render() {  
        return (
            <div >
               
                
                <img src={this.state.mapimg} alt='map location'></img>
                <Divider/>
                <br/>
                <Button basic color="green" icon='download' onClick={this.autoRefresh}></Button>
                <br/>
                
            </div>
        
        )
    }
}