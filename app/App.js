import React from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './helpers'

// Pages
import { Home } from './pages/Home'
import { Tableview } from './pages/Tableview'
import { Gridview } from './pages/Gridview'
import { Detailsview } from './pages/Detailsview'

// Components
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/grid/:category" component={Gridview} />
        <Route path="/table/:category" component={Tableview} />
        <Route path="/details/:category/:itemId" component={Detailsview} />
      </Router>
    )
  }
}

export default App
