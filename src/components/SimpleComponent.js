import React from 'react'

// Code SimpleComponent Here

export default class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    };
  }



  render(){
    return(
    <div onClick={()=> this.setState({
      mood: "sad"
      })}>
     {this.state.mood}
    </div>
  )
  }



}
