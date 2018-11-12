import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <label className="hide-items-wrapper">
                    <input id="checkboxHideItem" type="checkbox"/>
                    <span>Hide all completed tasks</span>
                </label>
                <button id="btnDelAllCompleted">delete all completed tasks</button>
                <button id="btnDelAll">delete all tasks</button>
            </footer>
        );
    }
}

export default Footer;