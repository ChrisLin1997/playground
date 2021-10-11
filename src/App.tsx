import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import VirtualList from './pages/virtual-list'
import CircleLoad from './pages/circle-load'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/virtual-list" component={VirtualList} />
          <Route path="/circle-load" component={CircleLoad} />
        </Switch>
      </Layout>
    </BrowserRouter> 
  </div>
)

export default App
