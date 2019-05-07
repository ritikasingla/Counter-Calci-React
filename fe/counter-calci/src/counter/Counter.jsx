import React, {Component} from 'react';
import CounterButton from './CounterButton.jsx';

class Counter extends Component{

    constructor() {
        super();

        this.state = {
            counter : 0
        }

        //this.increament = this.increament.bind(this);
    }
    increament = (addBy) => {
        this.setState(
            (prevState) => {return { counter : prevState.counter + addBy }}
          );
    }

    decreament = (addBy) => {
        this.setState(
            (prevState) => {return { counter : prevState.counter - addBy }}
          );
    }

    render() {
        return (
            <div>
                <CounterButton addBy={1} increamentMethod = {this.increament} decreamentMethod = {this.decreament}/>

                <CounterButton addBy={5} increamentMethod = {this.increament} decreamentMethod = {this.decreament}/>
                
                <CounterButton addBy={10} increamentMethod = {this.increament} decreamentMethod = {this.decreament}/>

                <span> {this.state.counter}</span>
            </div>
        )
    }
}

export default Counter;