import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { apiConstants } from '../constants'

import { categoryActions } from '../actions'

class Home extends Component {

  static get propTypes() {
    return {
      categories: PropTypes.any,
      dispatch: PropTypes.func
    }
  }

  componentDidMount() {
    this.props.dispatch(categoryActions.fetch())
  }

  render() {
    const { categories } = this.props
   
    return (
      <div className="container container--home">
        <h3 className="container__title">Categories</h3 >
        {categories.loading && <em className="container__loading">Loading categories...</em>}
        {categories.error && <span className="container__error">ERROR: {categories.error}</span>}
        {categories.items && 
          <div className="categories">
            {Object.keys(categories.items).map((key) =>
              <div key={key} className="categories__card">
                <h3 className="categories__card__text">{ key }</h3>
                <button className="categories__card__btn"><Link className="categories__card__btn__link" to={'table' + categories.items[key].replace(apiConstants.URL, '')}>Tableview</Link></button>
                <button className="categories__card__btn"><Link className="categories__card__btn__link" to={'grid' + categories.items[key].replace(apiConstants.URL, '')}>Gridview</Link></button>
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories } = state
  return {
    categories
  }
}

const connectedHome = connect(mapStateToProps)(Home)
export { connectedHome as Home }