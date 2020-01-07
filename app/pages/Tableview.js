import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { apiConstants } from '../constants'

import { starwarsActions } from '../actions'

export default class Tableview extends Component {

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
      <div className="container container--tableview">
        <h1 className="container__title">Tableview</h1 >
        {starwarsinfo.loading && <em className="container__loading">Loading starwarsinfo...</em>}
        {starwarsinfo.error && <span className="container__error">ERROR: {starwarsinfo.error}</span>}
        {starwarsinfo.items && !starwarsinfo.loading && 
          <table className="table table--starwarsinfo">
            <thead className="table__head">
              <tr className="table__head__row">
                <th className="table__head__row__item">Name</th>
                <th className="table__head__row__item">Link</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {starwarsinfo.items.map((info, index) =>
                <tr key={index} className="table__body__row">
                  {info.name && <td className="table__body__row__item">{info.name}</td>}
                  {!info.name && <td className="table__body__row__item">{info.title}</td>}
                  <td className="table__body__row__item"><Link to={'/details' + info.url.replace(apiConstants.URL, '')}>See details</Link></td>
                </tr>
              )}
            </tbody>
          </table>
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

const connectedTableview = connect(mapStateToProps)(Tableview)
export { connectedTableview as Tableview }
