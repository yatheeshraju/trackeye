import React, { Component } from 'react';
import {Form,Button,Message} from 'semantic-ui-react';
export default class SetGmapsKey extends Component {
    state={
        success:false,
        error:false,
        gmapsKey:'',
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    };
    setKey=()=>{
        localStorage.setItem('gmapsKey',this.state.gmapsKey);
        if(localStorage.getItem('gmapsKey')&&true){
            this.setState({success:true});
            setInterval(() => {
                this.setState({success:false});
               }, 3000);
        }else{
            this.setState({error:true})
            setInterval(() => {
                this.setState({error:false})
               }, 3000);
        }

    }
    render() {
        return (
            <div style={{minHeight:window.innerHeight}}>
            Set GMaps Key
           <Form success={this.state.success} error={this.state.error}>
           <Message animation='fade' duration='500' success content='Successfully set key !' />
           <Message animation='fade' duration='500'  error content='failed to set. try again ' />
               <Form.Input label='key' name='gmapsKey' value ={this.state.gmapsKey}onChange={this.handleChange} type='text'/>
               <Button positive type='button' fluid onClick={this.setKey} disabled={(!this.state.gmapsKey)}>Set Key</Button>
           </Form>

        </div>
        )
    }
}
