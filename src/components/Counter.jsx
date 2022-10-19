
import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    reset,
    incrementByAmount,
    incrementAsync,
  } from '../slices/counterSlice';
 
export default function Counter (){
 
    const counter = useSelector((state) => state.counter.value)
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
    <div className="counter">
        <h1>Counter App</h1>
        <h3>{counter}</h3>
        <button
         onClick={() => dispatch(increment())}>
        +
        </button>
        <button
         onClick={() => dispatch(decrement())}>
        -
        </button>
        <button
        onClick={() => dispatch(reset())}>
        RESET
        </button>
        <div>
            <input 
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                Add Amount
            </button>
            <button
                onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
            Add Async
            </button>
        </div>
        <h2>For Logged in users only</h2>
        <p>Log in to see a secret about me</p>
        <button onClick={() => dispatch(actionLogin)}>LogIn</button>
        <button onClick={() => dispatch(actionLogout)}>LogOut</button>
        {
        auth 
        ? (<p>User logged</p>)
        : ("")
        }
    </div>
    )
}