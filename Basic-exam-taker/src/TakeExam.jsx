import React from "react";
import { Btn } from "./App";
import styled from "styled-components";

export default class TakeExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter:0,
        marks:0,
        selOpt:"",
        lFlag:false,
        CDUFlag:true,
        RedirectFlag:false
        

    };
  }

  componentDidMount(){
    this.setState({CDUFlag:true})
    this.setState({lFlag:false})
    this.props.that.setState({RedirectFlag:false})
  }

  componentDidUpdate(){
    if(this.state.CDUFlag){
      if(this.state.counter==this.props.Qarr.length-1){
        this.setState({lFlag:true})
        this.setState({CDUFlag:false})
    }
    }
  }
  next(){
    if(this.props.Qarr[this.state.counter].ans==this.state.selOpt){
       this.setState({marks:this.state.marks+1})
      //  console.log(this.state.marks)
    }
    this.setState({counter:this.state.counter+1})
    this.setState({selOpt:""})
    
  }

  render() {
    return(
    <div>
        <h3>Question : {this.props.Qarr[this.state.counter].que}</h3>
        
        <h4><input type="radio" checked={this.state.selOpt=="a"} id="a" onChange={(e)=>{
          this.setState({selOpt:e.target.value})
        }} name="opts" value="a" />{this.props.Qarr[this.state.counter].a}</h4>
        
        <h4><input type="radio" checked={this.state.selOpt=="b"} id="b" onChange={(e)=>{
          this.setState({selOpt:e.target.value})
        }} name="opts" value="b" />{this.props.Qarr[this.state.counter].b}</h4>
        
        <h4><input type="radio" checked={this.state.selOpt=="c"} id="c" onChange={(e)=>{
          this.setState({selOpt:e.target.value})
        }} name="opts" value="c" />{this.props.Qarr[this.state.counter].c}</h4>
        
        <h4><input type="radio" checked={this.state.selOpt=="d"} id="d" onChange={(e)=>{
          this.setState({selOpt:e.target.value})
        }} name="opts" value="d" />{this.props.Qarr[this.state.counter].d}</h4>

        <br />
        {
          this.state.lFlag?<Btn onClick={()=>{
              this.props.that.setState({RedirectFlag:true})
              this.props.that.setState({marks:this.state.marks})
              this.setState({marks:0})
              this.props.that.setState({takeExam:false})

          }}>Submit</Btn>:<Btn onClick={()=>{
            this.next()
        }}>Next</Btn>
        }

        <br />
        <br />

    </div>
    );
  }
}

