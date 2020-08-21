import React, {  } from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

function Header () {
  return (
    <div className="header">
      <NavLink className="link" activeClassName="active" exact to="/">编辑器</NavLink>
      <NavLink className="link" activeClassName="active" exact to="/doc">文档</NavLink>
      <a className="link" target="_black" href="https://github.com/lyttonlee/react-qn-md" >Github</a>
    </div>
  )
}

export default Header
