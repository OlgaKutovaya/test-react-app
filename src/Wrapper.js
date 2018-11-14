import React, {Component} from 'react';
import Header from './Header';
import TodoList from "./TodoList";
import Footer from "./Footer";

class Wrapper extends Component {
    render() {
        let array = this.props.todoitem;

        let onSubmitFunc = this.props.onSubmit;
        let itemDoneFunc = this.props.markItemDone;
        let delSingleItem = this.props.deleteSingleItem;
        let funcHideDoneItems = this.props.hideDoneItems;
        let onDelAllCompletedTasks = this.props.deleteAllCompletedItems;
        let deleteAllItems = this.props.deleteAllItems;

        return (
            <div className='wrapper'>
                <Header
                    // passing functions to 'Header' component
                    onsubmitFunc={(text) => {
                        onSubmitFunc(text);
                    }}
                    onItemDone={(id, isChecked) => {
                        itemDoneFunc(id, isChecked);
                    }}
                />
                <main className='tasks-wrapper'>
                    <TodoList
                        todoListArr={array}
                        onItemDone={(id, isChecked) => {
                            itemDoneFunc(id, isChecked)
                        }}
                        deleteSingleItemFunc={(id) => {
                            delSingleItem(id)
                        }}
                    />
                </main>
                <Footer
                    hideDoneItems={isChecked => {
                        funcHideDoneItems(isChecked);
                    }}
                    deleteAllCompletedItems={() => {
                        onDelAllCompletedTasks();
                    }}
                    delAllItems={() => {
                        deleteAllItems();
                    }}
                />
            </div>
        );
    }
}

export default Wrapper;
