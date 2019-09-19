import React, { Component } from 'react';

class User extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>Name: {this.props.name}</div>
                <button onClick={ () => { this.props.onUpdate("Ram") }}>Send daat back</button>
            </div>
        )
    }
}

export default User;