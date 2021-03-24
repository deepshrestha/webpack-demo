import React, { Component } from 'react'

class Hooks extends Component {
    
    constructor(){
        super()
        console.log("constructor")
        this.state = {
            message: ''
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.setState(
            {
                message: "Hi, Good Morning CIBT students!"
            }
        )
    }

    componentDidUpdate(){
        console.log(`State has been updated to ${this.state.message} `)
    }

    render() {
        console.log("Render")
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default Hooks
