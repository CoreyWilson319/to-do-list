import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.list}</li>
        )
    }
}
export default ListItem;