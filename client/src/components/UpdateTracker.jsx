import React, { Component } from 'react'
import {Form,Button,Message} from 'semantic-ui-react';
const axios = require('axios');
export default class UpdateTracker extends Component {
    state={
        success:false,
        error:false,
        name:'',
        location:''
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    };


    updateTracker=(e)=>{
        axios({
            method: 'post',
            url: '/update',
            data: {
              name:this.state.name,
              location:this.state.location
            }
          })
          .then((response)=> {
             
           if(response.data==='success'){
               this.setState({success:true});
               this.setState({name:''});
               setInterval(() => {
                this.setState({success:false});
               }, 3000);
           }else{
               this.setState({error:true});
               setInterval(() => {
                this.setState({error:false});
               }, 3000);
           }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    render() {
        return (
            <div style={{minHeight:window.innerHeight}}>
                Update Tracker
               <Form success={this.state.success} error={this.state.error}>
               <Message animation='fade' duration='500' success content='Successfully updated tracker !' />
               <Message animation='fade' duration='500'  error content='failed to update. try again ' />
                   <Form.Input label='name' name='name' value ={this.state.name}onChange={this.handleChange} type='text'/>
                   <Form.Input label='location' name='location' value ={this.state.location} onChange={this.handleChange} type='text'/>
                
                   <Button positive type='button' fluid onClick={this.updateTracker} disabled={(!this.state.name &&!this.state.location)}>Create</Button>
               </Form>

            </div>
        )
    }
}
