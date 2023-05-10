import React from 'react'
import {userContext} from './context'

export default function Home() {
  let user = React.useContext(userContext)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Welcome React Store</h1>
        <p>Hello : {user}.</p>
    </div>
  )
}
