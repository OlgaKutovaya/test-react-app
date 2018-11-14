import React, {Component} from 'react';

class Footer extends Component {
    state = {
        isChecked: false
    };

    render() {
        return (
            <footer>
                <label className="hide-items-wrapper">
                    <input
                        id="checkboxHideItem"
                        type="checkbox"
                        checked={this.state.isChecked}
                        onClick={event => {
                            this.setState(prevstate => {
                                return {
                                    isChecked: !prevstate.isChecked
                                }
                            }, () => {
                                this.props.hideDoneItems(this.state.isChecked);
                            });
                        }}
                    />
                    <span>Hide all completed tasks</span>
                </label>
                <button
                    id="btnDelAllCompleted"
                    onClick={event => {
                        this.props.deleteAllCompletedItems();
                    }}
                >delete all completed tasks</button>
                <button
                    id="btnDelAll"
                    onClick={event => {
                        this.props.delAllItems();
                    }}
                >delete all tasks</button>
            </footer>
        );
    }
}

export default Footer;