import React from 'react';

export default class ListItem extends React.Component {
  render () {
    return (
      <li className={this.props.active? "list-selected" : "list-unselected"} onClick={this.props.onToggle}>
        <div className='task-number'>{this.props.numTask}</div>
        <div className="list-item-name">{this.props.name}</div>
        <div className="list-item-icon">
          <i className="fa fa-minus-square-o list-buttons"
          aria-hidden="true"
          onClick={this.props.removeClick}>
          </i>
        </div>
        <div className="list-item-icon">
          <i className="fa fa-pencil-square-o list-buttons"
          aria-hidden="true"
          onClick={this.props.editList}>
          </i>
        </div>
      </li>
    );
  }
}
