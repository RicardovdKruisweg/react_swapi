import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { apiConstants } from '../constants'

import { starwarsActions } from '../actions'

export default class Gridview extends Component {

  static get propTypes() {
    return {
      match: {
        params: {
          category: PropTypes.string
        }
      },
      starwarsinfo: PropTypes.any,
      dispatch: PropTypes.func
    }
  }

  componentDidMount() {
    const { category } = this.props.match.params
    if (category !== 'all') this.props.dispatch(starwarsActions.fetchByCategory(category))
    else this.props.dispatch(starwarsActions.fetch())
  }

  render() {
    const { starwarsinfo } = this.props

    return (
      <div className="container container--gridview">
        <h1 className="container__title">Gridview</h1 >
        {starwarsinfo.loading && <em className="container__loading">Loading starwarsinfo...</em>}
        {starwarsinfo.error && <span className="container__error">ERROR: {starwarsinfo.error}</span>}
        {starwarsinfo.items && !starwarsinfo.loading &&
          <div className="row row--starwarsinfo">
            {starwarsinfo.items.map((info, index) =>
              <div key={index} className="row__col row__col--3">
                {info.name && <p className="row__col__title">{info.name}</p>}
                {!info.name && <p className="row__col__title">{info.title}</p>}
                <p className="row__col__description"><Link to={'/details' + info.url.replace(apiConstants.URL, '')}>See details</Link></p>
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { starwarsinfo } = state
  return {
    starwarsinfo
  }
}

const connectedGridview = connect(mapStateToProps)(Gridview)
export { connectedGridview as Gridview }
