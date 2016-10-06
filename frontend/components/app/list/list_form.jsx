import React from 'react';

class ListForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:{name:""},
      hidden: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListNameInput = this.handleListNameInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state.list);
  }

  handleListNameInput(e) {
    this.setState({list:{name: e.target.value}});
  }

  handleCancel() {
    this.setState({hidden: true});
  }

  render(){
    if (this.state.hidden) {
      return <div></div>;
    } else {
      return(
        <div className="list-form-container">
          <h2 className='list-form-name'>Add a list</h2>
          <form className='list-form' onSubmit={this.handleSubmit}>
            <p>Please enter a new list name</p>
            <input className='list-name' type='text' value={this.state.name}
              onChange={this.handleListNameInput} />
            <button className='add-list'>Add</button>
            <button className='cancel-add' onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      );
    }
  }
}
