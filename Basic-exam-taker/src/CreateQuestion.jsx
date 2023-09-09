import React from "react";
import styled from "styled-components";
import { Btn } from "./App";

export default class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.QDAta=this.props.that.state.Qarr
    this.state = {
        que:"",
        create:0,
        opt:"",
        InpA:"",
        InpB:"",
        InpC:"",
        InpD:""
    };
  }

  adda(e){
   
   let obj={
      que:this.state.que,
      a:this.state.InpA,
      b:this.state.InpB,
      c:this.state.InpC,
      d:this.state.InpD,
      ans:this.state.opt
   }
   
   this.props.that.setState({Qarr:[...this.props.that.state.Qarr,obj]})
   
   this.setState({que:""});
   this.setState({InpA:""});
   this.setState({InpB:""});
   this.setState({InpC:""});
   this.setState({InpD:""});
   this.setState({opt:""});
   
   console.log(this.props.that.state.Qarr)
   
    
  }

  render() {
    return(
    <div> 
      <br />
      <br />
         
         <span>Q. </span><Input value={this.state.que} onChange={(e)=>{this.setState({que:e.target.value})}} placeholder="write question here"/>
         <br />
         {/* <Btn onClick={()=>{
            this.setState({options:!this.state.options})
    
         }}>Add Options</Btn> */}

         <br /><br />

      <div>
                    <input onChange={(e)=>{
                        this.setState({opt:e.target.value})
                    }} type="radio" id="a" name="opts" checked={this.state.opt=="a"} value="a" />
                    <Inp2 value={this.state.InpA} onChange={(e)=>{this.setState({InpA:e.target.value})}} placeholder="enter option a"></Inp2>
                    <br />
                    <input onChange={(e)=>{
                        this.setState({opt:e.target.value})
                    }} type="radio" id="b"  name="opts" checked={this.state.opt=="b"} value="b" />
                    <Inp2 value={this.state.InpB} onChange={(e)=>{this.setState({InpB:e.target.value})}} placeholder="enter option b"></Inp2>
                    <br />
                    <input onChange={(e)=>{
                        this.setState({opt:e.target.value})
                    }} type="radio" id="c" name="opts" checked={this.state.opt=="c"} value="c" />
                    <Inp2 value={this.state.InpC} onChange={(e)=>{this.setState({InpC:e.target.value})}} placeholder="enter option c"></Inp2>
                    <br />
                    <input onChange={(e)=>{
                        this.setState({opt:e.target.value})
                    }} type="radio" id="d" name="opts" value="d" />
                    <Inp2 value={this.state.InpD} checked={this.state.opt=="d"} onChange={(e)=>{this.setState({InpD:e.target.value})}} placeholder="enter option d"></Inp2>
                    <br />

                    <br />
                    <br />
                    <Btn onClick={(e)=>{
                     this.adda(e)
                    }}>Add question</Btn>
                    <br />
                    <br />
                    <Btn onClick={()=>{
                     this.props.that.setState({createQue:false})
                    }}>Home</Btn>
                </div>
        
    </div>
    );
  }
}

const Input = styled.input`
   /* border: none; */
   padding: 5px 16px;
   width: 60vw;
`;
const Inp2 = styled.input`
   /* border: none; */
   padding: 5px 16px;
   min-width: 20vw;
`;