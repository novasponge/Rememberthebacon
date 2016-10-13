import React from 'react';
import Modal from 'react-modal';
import ListIndex from './list/list_index';
import ListForm from './list/list_form';
import { fetchAllTasks, searchTasks, receiveTaskDetail } from '../../actions/task_actions';
import { connect } from 'react-redux';
import moment from 'moment';

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
      listsAnimation: 'lists-index container group',
      inboxAnimation: 'inbox container group',
      formType: "create-list",
      listId: "",
      numToday: null,
      numTomorrow: null,
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleListsAnimation = this.handleListsAnimation.bind(this);
    this.handleEditList = this.handleEditList.bind(this);
    this.handleInboxAnimation = this.handleInboxAnimation.bind(this);
    this.handleAlltasks = this.handleAlltasks.bind(this);
    this.handleTodayTasks = this.handleTodayTasks.bind(this);
    this.handleTomorrowTasks = this.handleTomorrowTasks.bind(this);
  }

  closeModal() {
    this.setState({listFormOpen: false});
  }

  componentDidMount() {
    this.props.fetchAllTasks();
  }

  handleAddList(e) {
    e.stopPropagation();
    this.setState({listFormOpen: true});
    this.setState({formType: "create-list"});
  }

  handleEditList(id, e) {
    e.stopPropagation();
    this.setState({listFormOpen: true});
    this.setState({formType: "edit-list"});
    this.setState({listId: id});
  }

  handleInboxAnimation() {
    if (this.state.inboxAnimation === "inbox container group") {
      this.setState({inboxAnimation: "inbox container group inbox-clicked"});
    } else {
      this.setState({inboxAnimation: "inbox container group"});
    }
  }

  handleListsAnimation() {
    if (this.state.listsAnimation === "lists-index container group") {
      this.setState({listsAnimation: "lists-index container group lists-index-clicked"});
    } else {
      this.setState({listsAnimation: "lists-index container group"});
    }
  }

  handleAlltasks(e) {
    e.stopPropagation();
    this.props.fetchAllTasks();
    this.props.receiveTaskDetail(null);
  }

  handleTodayTasks (e) {
    e.stopPropagation();
    const dateStr = moment().format("DD-MM-YYYY");
    this.props.searchTasks(dateStr);
    this.props.receiveTaskDetail(null);
  }

  handleTomorrowTasks (e) {
    e.stopPropagation();
    const dateStr = moment().add(1, 'day').format("DD-MM-YYYY");
    this.props.searchTasks(dateStr);
    this.props.receiveTaskDetail(null);
  }

  render() {
    let numTask;
    if (this.props.lists.length !== 0 ) {
      numTask = 0;
      for (let i = 0; i < this.props.lists.length; i++) {
        numTask += this.props.lists[i].num_task;
      }
    }

    return (
      <div className="app-side-bar">
        <a href="/#/app" className='app-side-logo'>
          <h1 className="app-side-logo-name">Remember the bacon</h1>
        </a>
        <div className={this.state.inboxAnimation} onClick={this.handleInboxAnimation}>
          <h2 className="container-title">Inbox</h2>
          <button onClick={this.handleAlltasks} className="all-tasks">All Tasks
            <div className="task-number">{numTask}</div>
          </button>
          <button onClick={this.handleTodayTasks} className="all-tasks">Today
            <div className="task-number">{this.props.task_num_info.todayTaskNumber}</div>
          </button>
          <button onClick={this.handleTomorrowTasks} className="all-tasks">Tomorrow
            <div className="task-number">{this.props.task_num_info.tomorrowTaskNumber}</div>
          </button>
        </div>
        <div className={this.state.listsAnimation} onClick={this.handleListsAnimation}>
          <h2 className="container-title">
            Lists<i className="fa fa-plus-square-o add-list-button" onClick={this.handleAddList} aria-hidden="true"></i>
          </h2>
          <ListIndex handleEditList={this.handleEditList}/>
        </div>
        <Modal className="add-list-modal"
          isOpen={this.state.listFormOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
        >
          <ListForm closeModal={this.closeModal} formType={this.state.formType} listId={this.state.listId}/>
          <button className='cancel-add list-form-button' onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    task_num_info: state.lists.task_num_info,
    lists: Object.keys(state.lists.list_index_info).map(key => state.lists.list_index_info[key]),
    tasks: Object.keys(state.tasks).map(key => state.tasks[key])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks()),
    searchTasks: (queryStr) => dispatch(searchTasks(queryStr)),
    receiveTaskDetail: (task) => dispatch(receiveTaskDetail(task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSide);
