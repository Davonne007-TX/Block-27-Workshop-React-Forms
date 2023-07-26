import React from 'react'
import { useState } from 'react'

function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick () {
       try {
        const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        const result = await response.json();
        console.log(result);
        setSuccessMessage(result.message);

       } catch (error) {
        setError(error.message)
       }
    } //last curly of handleClick

  return (
    <>
    <div>
        <h2>Authenticate</h2>

         {successMessage && <p>{successMessage}</p>}
         {error && <p>{error}</p>}

         <button onClick={handleClick}>Authenticate Token</button>
  </div>
  </>
  )
}

export default Authenticate

