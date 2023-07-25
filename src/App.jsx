import './App.css'
import { useState, useEffect} from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("The page has mounted")
  }, [])


  return (
    <>
     <Authenticate/>
     <SignUpForm />
    </>
  )
}

export default App
