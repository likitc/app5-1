import React from 'react'
import Route1 from './route'
import {userContext} from './context'

function App() {
  return (
    <userContext.Provider value={'Likit Chamuthai'}>
        <Route1 />
    </userContext.Provider>
    
  )
}

export default App;
