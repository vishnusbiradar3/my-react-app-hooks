import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count){
            console.log("call update")
            document.title = `Clicked ${this.state.count} times`;
        }

    }



 
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={e => {
                        this.setState({name: e.target.value})
                }}
                />
                <button onClick={this.increment}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounter