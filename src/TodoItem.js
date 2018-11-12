import React, {Component} from 'react';

class TodoItem extends Component {

    render() {
        return (
            <label>
                <input type="checkbox" />
                <span>text</span>
            </label>
        );
    }
}

export default TodoItem;