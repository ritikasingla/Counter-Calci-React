import React, {Component} from 'react';
import './Countercss.css';


class CounterButton extends Component {
  
    render() {
        return ( <div>
            <button onClick={() => this.props.increamentMethod(this.props.addBy)}>+{this.props.addBy}</button>
            <button onClick={() => this.props.decreamentMethod(this.props.addBy)}>-{this.props.addBy}</button>
            </div>
        )
    }
}

export default CounterButton;