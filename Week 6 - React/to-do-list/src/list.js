import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div className="Items">
            <h3>List Header </h3>
            <ul>
                <li>List{ this.props.List }</li>
            </ul>
                
            </div>
        )
    }
}     



export default List;