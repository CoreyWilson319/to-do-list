import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        console.log(this.props)
        return (
            <li>{this.props.list}</li>
        )
    }
}
export default ListItem;