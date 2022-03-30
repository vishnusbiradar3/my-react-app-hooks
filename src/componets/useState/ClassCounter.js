import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div><button onClick={this.increment}>Count {this.state.count}</button></div>
        )
    }
}

export default ClassCounter