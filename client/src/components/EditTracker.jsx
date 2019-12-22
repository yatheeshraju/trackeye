import React, { Component } from 'react';
import {axios} from 'axios';
import {Form,Button,Message} from 'semantic-ui-react';
export default class EditTracker extends Component {
    state={
        success:false,
        error:false,
        olduniqueName:this.props.uniqueName
    }

    setUniqueName=(e)=>{
        this.setState({uniqueName:e.target.value})
    };
    editTracker=(e)=>{
        axios({
            method: 'post',
            url: '/edit',
            data: {
              uniqueName:this.state.uniqueName,
              olduniqueName:this.state.olduniqueName
            }
          })
          .then((response)=> {
              console.log(response.data);
           if(response.data==='success'){
               this.setState({success:true});
           }else{
               this.setState({error:true});
           }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    render() {
        return (
            <div style={{minHeight:window.innerHeight}}>
                Edit Tracker
                <Form success={this.state.success} error={this.state.error}>
               <Message animation='fade' duration='500' success content='Successfully created tracker !' />
               <Message animation='fade' duration='500'  error content='tracker name already taken ! try other name' />
                   <Form.Input label='uniqueName' onChange={this.setUniqueName} type='text'/>
                   <Button positive type='button' fluid onClick={this.editTracker} disabled={!this.state.uniqueName}>Update</Button>
               </Form>
            </div>
        )
    }
}
