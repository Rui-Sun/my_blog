import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }
 
    _increment() {
        this.setState({ count: this.state.count + 1 });
    }
 
    render() {
        return (
            <div>
                <span>the count is: </span>
                <span onClick={this._increment.bind(this)}>{this.state.count}</span>
            </div>
        )
    }
}