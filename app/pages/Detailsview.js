import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { apiConstants } from '../constants'

import { starwarsActions } from '../actions'

export default class Detailsview extends Component {

  static get propTypes() {
    return {
      match: {
        params: {
          itemId: PropTypes.number,
          category: PropTypes.string
        }
      },
      location: {
        pathname: PropTypes.string
      },
      starwarsitem: PropTypes.any,
      dispatch: PropTypes.func
    }
  }

  componentDidMount() {
    const { category, itemId } = this.props.match.params
    const url = `/${category}/${itemId}`
    this.props.dispatch(starwarsActions.fetchItem(url))
  }

  componentDidUpdate(prevProps) {
    const prevUrl = prevProps.location.pathname.replace('/details', '')
    const { category, itemId } = this.props.match.params
    const url = `/${category}/${itemId}/`
    if (prevUrl !== url) this.props.dispatch(starwarsActions.fetchItem(url))
  }
    
  render() {
    const { starwarsitem } = this.props

    return (
      <div className="container container--detailsview">
        <h3 className="container__title">Details</h3 >
        {starwarsitem.loading && <em className="container__loading">Loading starwarsitem...</em>}
        {starwarsitem.error && <span className="container__error">ERROR: {starwarsitem.error}</span>}
        {starwarsitem.item && !starwarsitem.loading &&
          <div className="card">
            {Object.keys(starwarsitem.item).map((key) =>
              <div key={key} className="card__item">
                <p className="card__item__key">{key.replace('_', ' ')}</p>
                {!Array.isArray(starwarsitem.item[key]) && <p className="card__item__value">{starwarsitem.item[key]}</p>}
                {Array.isArray(starwarsitem.item[key]) && <div className="card__item__links">
                  {starwarsitem.item[key].map((item) => 
                    <Link className="card__item__links__link" key={item} to={'/details' + item.replace(apiConstants.URL, '')}>{item.replace(apiConstants.URL, '')}</Link>
                  )}
                </div>
                }
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { starwarsitem } = state
  return {
    starwarsitem
  }
}

const connectedDetailsview = connect(mapStateToProps)(Detailsview)
export { connectedDetailsview as Detailsview }
