import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import VirtualList from './pages/virtual-list'
import LoadCircle from './pages/load-circle'
import LoadBall from './pages/load-ball'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/virtual-list" component={VirtualList} />
          <Route path="/load-circle" component={LoadCircle} />
          <Route path="/load-ball" component={LoadBall} />
        </Switch>
      </Layout>
    </BrowserRouter> 
  </div>
)

export default App
