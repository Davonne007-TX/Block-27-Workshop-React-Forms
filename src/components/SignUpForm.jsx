import React from 'react'
import { useState, useEffect} from 'react'

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("The page has mounted")
      }, [])


    async function handelSubmit(event) {
        event.preventDefault();
        console.log("Hellooooo");

    } //last curly to handelSubmit

  return (
    <>
      <h2>Sign Up</h2>

      <form onSubmit={handelSubmit}>
        <label>
            Username: {""} 
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
            Password: {""} 
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button>Submit</button>

     </form>
 </>
  )
}

export default SignUpForm