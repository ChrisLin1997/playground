import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import './style.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header>
        <img src={Logo}/>
      </header>

      <article>
        <aside className="layout-aside">
          <Link to="/">Home</Link>
          <Link to="/virtual-list">Virtual-List</Link>
          <Link to="/load-circle">Load-Circle</Link>
          <Link to="/load-ball">Load-Ball</Link>
        </aside>

        <main>
          { children }
        </main>
      </article>
    </div>
  )
}

export default Layout 