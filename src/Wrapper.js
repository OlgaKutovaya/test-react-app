import React, {Component} from 'react';
import Header from './Header';
import TodoList from "./TodoList";
import Footer from "./Footer";

class Wrapper extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <main className='tasks-wrapper'>
                    <TodoList />
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Wrapper;
