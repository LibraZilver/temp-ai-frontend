import { useState, useLayoutEffect } from 'react'
import { Router, Routes, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'

const history = createBrowserHistory()

function App(): React.JSX.Element {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [])

  return (
    <Router location={state.location} navigator={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App


