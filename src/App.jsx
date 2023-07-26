import './App.css'
import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>React Forms<br/>
      Block 27 Workshop</h1>

      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
