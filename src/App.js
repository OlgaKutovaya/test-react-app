import React, { Component } from 'react';
import Wrapper from "./Wrapper";

class App extends Component {
  state = {
    // todoList will contains todoItem objects {id: ,todoText: ,done: }
    todoList: [],
    isDoneShown: true
  };

  // adds todoItem to todoList array on submit button click
  submitHandle = (text) => {
    this.setState(prevState => {
      return {
        todoList: [
            ...prevState.todoList,
            {id: this.state.todoList.length + 1, todoText: text, done: false}
        ]
      }
    })
  };

  markItemDoneHandler = (id, isChecked) => {
    let index = this.state.todoList.findIndex(item => item.id === id);
    let newTodoList = [...this.state.todoList];
    newTodoList[index]['done'] = !newTodoList[index]['done'];
    this.setState(prevState => {
      return {todoList: newTodoList}
    })
  };

  hideDoneItemsHandler = (isChecked) => {
    this.setState({isDoneShown: !isChecked});
  };

  deleteSingleItemHandler = (id) => {
    this.setState(prevstate => {
      return {
        todoList: prevstate.todoList.filter(item => {
          return item.id !== id;
        })
      }
    })
  };

  deleteAllCompletedHandler = () => {
    this.setState(prevstate => {
      return {
        todoList: prevstate.todoList.filter(item => {
          return item.done === false
        })
      }
    })
  };

  deleteAllItemsHandler = () => {
    this.setState(prevstate => {
      return {
        todoList: []
      }
    })
  };

  render() {
    return (
    <Wrapper
      // passing full or filtered todoItems array to inner components
      todoitem={this.state.isDoneShown ? this.state.todoList
          : this.state.todoList.filter(item => item.done === false)
      }
      // passing functions to 'Wrapper' component
      onSubmit={(text)=> {
        this.submitHandle(text);
      }}
      markItemDone={(id, isChecked) => {
        this.markItemDoneHandler(id, isChecked);
      }}
      deleteSingleItem={(id) => {
        this.deleteSingleItemHandler(id);
      }}
      hideDoneItems={(isChecked) => {
        this.hideDoneItemsHandler(isChecked);
      }}
      deleteAllCompletedItems={() => {
        this.deleteAllCompletedHandler();
      }}
      deleteAllItems={() => {
        this.deleteAllItemsHandler();
      }}
    />
    );
  }
}

export default App;
