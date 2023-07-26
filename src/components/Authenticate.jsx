import React from 'react'
import { useState } from 'react'

function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handelClick () {
       try {

       } catch (error) {
        setError(error.message)
       }

    } //last curly of handelClick

  return (
    <>
    <div>
        <h2>Authenticate</h2>

         {successMessage && <p>{successMessage}</p>}
         {error && <p>{error}</p>}

         <button onClick={handelClick}>Authenticate Token</button>
  </div>
  </>
  )
}

export default Authenticate