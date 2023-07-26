import React from 'react'

function Authenticate({token}) {

    async function handelClick () {
        console.log("did this work");

    } //last curly of handelClick

  return (
    <>
     <h2>Authenticate</h2>

     <button onClick={handelClick}>Authenticate Token</button>
    </>
  )
}

export default Authenticate