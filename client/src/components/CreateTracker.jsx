import React, { Component } from 'react';
import {Form,Button} from 'semantic-ui-react';
const axios = require('axios');

export default class CreateTracker extends Component {
    state={
        
    }

    setUniqueName=(e)=>{
        this.setState({uniqueName:e.target.value});
        console.log(this.state);
    };

    createTracker=(e)=>{
        axios({
            method: 'post',
            url: '/create',
            data: {
              uniqueName:this.state.uniqueName
            }
          })
          .then(function (response) {
           
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    render() {
        return (
            <div>
                Create Tracker
               <Form >
                   <Form.Input label='uniqueName' onChange={this.setUniqueName} type='text'/>
                   <Button type='button' fluid onClick={this.createTracker} disabled={!this.state.uniqueName}>Create</Button>
               </Form>

            </div>
        )
    }
}
