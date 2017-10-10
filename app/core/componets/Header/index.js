import React, { Component } from 'react'
import { Navigation } from '../Navigation'
import { Logotype } from '../Logotype'
import { ProfileNavigation } from '../ProfileNavigaion'
import styles from './Header.scss'
// import PropTypes from 'prop-types'

class Header extends Component {
  render () {
    return (
      <div className={styles.Root}>
        <div className={styles.Logotype}>
          <Logotype />
        </div>
        <Navigation list={[
          {
            title: 'Home',
            link: '/',
            isCurrent: true
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
        <ProfileNavigation />
      </div>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export {
  Header
}
