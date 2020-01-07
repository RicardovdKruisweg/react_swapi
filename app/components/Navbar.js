import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list__item"><Link className="navbar__list__item__link" to="/">Categories</Link></li>
          <li className="navbar__list__item"><Link className="navbar__list__item__link" to="/table/all">Tableview</Link></li>
          <li className="navbar__list__item"><Link className="navbar__list__item__link" to="/grid/all">Gridview</Link></li>
        </ul>
      </div>
    )
  }
}
