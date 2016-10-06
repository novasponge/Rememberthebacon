import React from 'react';
import Modal from 'react-modal';
import ListIndex from './list/list_index';
import ListForm from './list/list_form';

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    display: "block",
    position : 'fixed',
    top : "50%",
    left : "50%",
    width : "314px",
    border : '1px solid #ccc',
    background : '#fff',
    overflow : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius : '4px',
    transform: 'translate(-50%, -50%)',
  }
};

class AppSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listFormOpen: false,
      listsAnimation: 'lists-index-container group'
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleListsAnimation = this.handleListsAnimation.bind(this);

  }


  closeModal() {
    this.setState({listFormOpen: false});
  }

  handleAddList(e) {
    this.setState({listFormOpen: true});
  }

  handleListsAnimation() {
    if (this.state.listsAnimation === "lists-index-container group") {
      this.setState({listsAnimation: "lists-index-container group lists-index-clicked"});
    } else {
      this.setState({listsAnimation: "lists-index-container group"});
    }
  }

  render() {
    return (
      <div className="app-side-bar">
        <a href="/#/app" className='app-side-logo'>
          <h1 className="app-side-logo-name">Remember the bacon</h1>
        </a>
        <div className={this.state.listsAnimation} onClick={this.handleListsAnimation}>
          <h2 className="lists-index-container-title">
            Lists<i className="fa fa-plus-square-o add-list-button" onClick={this.handleAddList} aria-hidden="true"></i>
          </h2>
          <ListIndex />
        </div>
        <Modal className="add-list-modal"
          isOpen={this.state.listFormOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
        >
          <ListForm closeModal={this.closeModal}/>
          <button className='cancel-add list-form-button' onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}


export default AppSide;
