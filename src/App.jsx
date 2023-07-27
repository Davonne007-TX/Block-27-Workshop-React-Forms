import './App.css'
import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
      <h1>React Forms<br/>
      Block 27 Workshop</h1>

      <div className="myFormContainer">
        <SignUpForm token={token} setToken={setToken} />
        <br />
        <hr />
        <Authenticate token={token} setToken={setToken} setUsername={setUsername} setPassword={setPassword} username={username}/>
      </div>
    </>
  )
}

export default App
