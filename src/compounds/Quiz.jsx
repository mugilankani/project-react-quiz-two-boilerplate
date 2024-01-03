import React, { Component } from 'react'
import "../App.css"
import "./Array"



class Quiz extends Component {

    constructor(props){
        super(props)

        this.state ={
            data : props.array,
            index: 0
        }
    }

    handleBack = () => {
        if(this.state.index ==0){
            this.setState({
                
                index : this.state.data.length -1
        })
        }else{
            this.setState({
                index : this.state.index -1
            })
        }
    }
    handleForw = () => {
        if(this.state.index== this.state.data.length -1){
            this.setState({

                index: 0
            })

        }else{
            this.setState({
                index : this.state.index +1
            })
        }
    }
   quitbtn(){
    alert("Are you sure you want to quit ?")
   }


  render() {
    return (
      <div className='quiz'>
        <h1 className='Question'>Question</h1>
        <h5 className='noOfchoice'>{this.state.index+1} of 15</h5>
        <h2 className='questinNo'>{this.state.data[this.state.index].question}</h2>
        <div className='option'>
            <button>{this.state.data[this.state.index].optionA}</button>
            <button>{this.state.data[this.state.index].optionB}</button>
            <button>{this.state.data[this.state.index].optionC}</button>
            <button>{this.state.data[this.state.index].optionD}</button>
        </div>
        <div className='options3'>
            <button onClick={this.handleBack} className='preBtn'>Previous</button>
            <button onClick={this.handleForw} className='nexBtn'>Next</button>
            <button onClick={this.quitbtn} className='quBtn'>Quit</button>
        </div>
        
      </div>
    )
  }
}
export default  Quiz