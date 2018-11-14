import React, {Component} from 'react';
import TodoItem from "./TodoItem";


class TodoList extends Component {
    render() {
        let todoListMain = this.props.todoListArr;
        let itemDoneFunc = this.props.onItemDone;
        let delSingleTask = this.props.deleteSingleItemFunc;

        return (
            <ol id="todoList"> {
                /*create a new array of JSX elements*/
                todoListMain.map(item => {
                    return (
                         <div key={item.id}>
                            <TodoItem
                                id={item.id}
                                todotext={item.todoText}
                                isdone={item.done}

                                onDeleteSingleItem={(id) => {
                                    delSingleTask(id);
                                }}
                                itemDoneFunctInner={(id, isChecked) => {
                                    itemDoneFunc(id, isChecked);
                                }}
                            />
                        </div>
                    )
                })}
            </ol>
        );
    }
}

export default TodoList;