import React, {Component} from 'react';

class TodoItem extends Component {
    state = {
        isChecked: this.props.isdone
    };

    render() {
        let text = this.props.todotext;
        let itemId = this.props.id;
        let isDone = this.props.isdone;

        let itemDone = this.props.itemDoneFunctInner;
        let onDeleteSingleItemFunct = this.props.onDeleteSingleItem;

        return (
            <label>
                <span
                    className='del-item'
                    onClick={event => {
                        onDeleteSingleItemFunct(itemId)
                      }
                    }
                > </span>
                <input className='checkboxItem'
                       type="checkbox"
                       onClick={event => {
                           this.setState(prevstate => {
                               return {
                                   isChecked: !prevstate.isChecked
                               }
                           }, () => {
                               itemDone(itemId, this.state.isChecked);
                           });
                       }}
                       checked={this.state.isChecked}
                />
                <span className={`checkboxItem ${isDone ? 'task-done' : ''}`}>{text}</span>
            </label>
        );
    }
}

export default TodoItem;