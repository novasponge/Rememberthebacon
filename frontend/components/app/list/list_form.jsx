import React from 'react';
import {connect} from 'react-redux';
import {createList} from '../../../actions/list_actions';

class ListForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListNameInput = this.handleListNameInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state);
    this.props.closeModal();
  }

  handleListNameInput(e) {
    this.setState({name: e.target.value});
  }

  render(){
    return(
      <div className="list-form-container">
        <h2 className='list-form-name'>Add a list</h2>
        <div className='list-form'>
          <label>Please enter a new list name</label>
          <form onSubmit={this.handleSubmit}>
            <input className='list-name' type='text' value={this.state.name}
              onChange={this.handleListNameInput} />
            <button className='add-list list-form-button'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createList: (list) => dispatch(createList(list))
  };
}

export default connect(null,mapDispatchToProps)(ListForm);
