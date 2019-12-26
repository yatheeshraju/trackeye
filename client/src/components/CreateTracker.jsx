import React, { Component } from 'react';
import {Form,Button,Message} from 'semantic-ui-react';
const axios = require('axios');

export default class CreateTracker extends Component {
    state={
        success:false,
        error:false,
        uniqueName:''
    }

    setUniqueName=(e)=>{
        this.setState({uniqueName:e.target.value})
    };

    createTracker=(e)=>{
        axios({
            method: 'post',
            url: '/create',
            data: {
              uniqueName:this.state.uniqueName
            }
          })
          .then((response)=> {
             
           if(response.data==='success'){
               this.setState({success:true});
               this.setState({uniqueName:''});
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
                Create Tracker
               <Form success={this.state.success} error={this.state.error}>
               <Message animation='fade' duration='500' success content='Successfully created tracker !' />
               <Message animation='fade' duration='500'  error content='tracker name already taken ! try other name' />
                   <Form.Input label='uniqueName' onChange={this.setUniqueName} type='text'/>
                   <Button positive type='button' fluid onClick={this.createTracker} disabled={!this.state.uniqueName}>Create</Button>
               </Form>

            </div>
        )
    }
}
