import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {actionIncremented, actionDecremented, actionReset, actionLogin, actionLogout } from './actions/index'
import Counter from './components/Counter';

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
