import React, { Component } from 'react'
import { Btn } from "./App"

export default class Result extends Component{
   render(){
    return(
        <div>
            <h2>You have answered {this.props.marks} question correctly</h2>
            <br />
            <br /><br />
            <Btn onClick={()=>{
                this.props.that.setState({RedirectFlag:false})
            }}>Home</Btn>
        </div>
    );
   }
}