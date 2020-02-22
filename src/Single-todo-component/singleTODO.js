import React, { Component } from 'react';


class SingleTODO extends Component{

    constructor(){
        super();
    }

    render(){
        return(
        <li>{this.props.todo}<button>X</button></li>
        );
    }
}

export default SingleTODO;