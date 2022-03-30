import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
         x:0,
         y:0
        }
    }
    logMoucesPostion = e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMoucesPostion);
    }
  render() {
    return (
      <div>X -{this.state.x} Y- {this.state.y}</div>
    )
  }
}
