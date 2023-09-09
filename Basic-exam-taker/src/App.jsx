import { Component, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import CreateQuestion from './CreateQuestion';
import TakeExam from './TakeExam';
import Result from './Result';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      tkExm:false,
      crtQus:false,
      RedirectFlag:false,
      takeExam:false,
      createQue:false,
      marks:0,
      Qarr:[
        {
          que:"which one is a desert",
          a:"shimla",
          b:"kulla",
          c:"sahara",
          d:"montreal",
          ans:"c"
        },
        {
          que:"where is mumbai",
          a:"kerala",
          b:"mahrashtra",
          c:"goa",
          d:"pondicherry",
          ans:"b"
        },
        {
          que:"which one is a desert",
          a:"shimla",
          b:"kulla",
          c:"sahara",
          d:"montreal",
          ans:"c"
        },
        {
          que:"where is mumbai",
          a:"kerala",
          b:"mahrashtra",
          c:"goa",
          d:"pondicherry",
          ans:"b"
        }
      ]

    }
  }
  componentDidMount(){
    this.setState({RedirectFlag:false})
  }
  render(){
    return (
      <div>
        <h1>Question Bank Creator</h1>
          <S1Btn>
             <Btn onClick={()=>{
              this.setState({takeExam:true})
             }}>Take Exam</Btn>
             <Btn onClick={()=>{
              this.setState({createQue:true})
             }}>Create Questions</Btn>
          </S1Btn>
        
        {
            this.state.createQue?<CreateQuestion that={this} setQ={this.setState}/>:null
        }
        {
          this.state.takeExam?<TakeExam that={this} Qarr={this.state.Qarr}/>:null
        }
        {
          this.state.RedirectFlag?<Result that={this} marks={this.state.marks}/>:null
        }
      </div>
    )
  }
}

const S1Btn = styled.div`
  display: flex;
  gap: 10px;
`;

export const Btn=styled.button`
  padding: 10px 16px;
  background-color: lightblue;
  border: none;
`;
