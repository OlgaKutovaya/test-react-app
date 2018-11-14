import React, {Component} from 'react';

class Header extends Component {
    state = {
        value: ''
    };

    render() {
        const isEnabled = this.state.value.length > 0;

        return (
            <React.Fragment>
                <h1>Task list</h1>
                <header className="input-wrapper">
                    <form action="#">
                        <div className="input-img"/>
                        <label>
                            <input
                                id="input-field"
                                type="text"
                                placeholder="enter task"
                                required
                                value={this.state.value}
                                onChange={event =>
                                    this.setState({value: event.target.value})
                                }
                            />
                        </label>
                        <button
                            id="btn-add"
                            disabled={!isEnabled}
                            onClick={event => {
                                event.preventDefault();
                                this.props.onsubmitFunc(this.state.value);
                                this.setState({value: ''});
                            }}
                        >add</button>
                    </form>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;