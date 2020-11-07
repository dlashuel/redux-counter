import React from 'react';
import { connect } from 'react-redux';

const Counter = (props)=>{
    
    return(
        <div>
            <h1>Counter</h1>
            <p>Count:{props.count}</p>
            <p>Month: </p>
            <p>Day: </p>
            <button onClick={() => props.incrementCounter()}>Increment</button>
            <button onClick={() => props.decrementCounter()}>Decrement</button>
            <button onClick={()=> props.multiply()}>Multiply</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        month: state.month,
        date: state.date
    }
}



const mapDispatchToProps = dispatch => ({
    incrementCounter: () => { 
        dispatch({ type: "INCREMENT" })
    },
    decrementCounter: () => { 
        dispatch({ type: "DECREMENT" })
    },
    multiply: () => { 
        dispatch({ type: "MULTIPLY" })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

