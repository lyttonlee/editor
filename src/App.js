import React from 'react'
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import routes from './routes/Routes'

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} exact path={route.path} children={<route.component />}></Route>
        })}
      </Switch>
    </Router>
  )
}

export default App
