import React, {Component} from 'react';

class Header extends Component {
    state = {
        value: ''
    };
    render() {
        return (
            <React.Fragment>
                <h1>Task list</h1>
                <header className="input-wrapper">
                    <form action="#">
                        <div className="input-img"/>
                        <label>
                            <input id="input-field" type="text" placeholder="enter task" required
                                   value={this.state.value}
                                   onChange={event => this.setState({value: event.target.value})}
                            />
                        </label>
                        <button id="btn-add">add</button>
                    </form>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;