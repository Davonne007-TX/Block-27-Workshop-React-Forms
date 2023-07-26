import './App.css'
import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
     <Authenticate/>
     <SignUpForm />
    </>
  )
}

export default App
