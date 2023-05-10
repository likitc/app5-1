import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function Products() {
    let navigate = useNavigate()
  return (
    <div style={{textAlign:"center"}}>
        <h1>This is My Product page.</h1>
        <Link to="/">Back to Homepage</Link>
        <button onClick={() => navigate("/")}>Redirect</button>
    </div>
  )
}
