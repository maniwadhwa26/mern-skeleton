import React from 'react'
//import { render } from 'react-dom'
import { hydrate } from 'react-dom'
import App from './App'

//render(<App/>, document.getElementById('root'))
hydrate(<App/>, document.getElementById('root'))