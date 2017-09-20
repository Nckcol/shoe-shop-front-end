import React, { Component } from 'react'
import { Navigation } from '../Navigation'
// import PropTypes from 'prop-types'

class Header extends Component {
  render () {
    return (
      <div>
        {/*<Logotype />*/}
        <Navigation list={[
          {
            title: 'Home',
            link: '/'
          },
          {
            title: 'Catalog',
            link: '/catalog/'
          },
          {
            title: 'Contacts',
            link: '/contacts/'
          }
        ]} />
        {/*<ProfileNavigation />*/}
      </div>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export {
  Header
}
