import React, { Component } from 'react'

import styles from './Navigation.scss'
import { NavigationItem } from './NavigationItem'

class Navigation extends Component {
  render () {
    const {list} = this.props
    
    return (
      <nav className={styles.Root}>
        {
          list.map(
            ({title, link}, index) => <NavigationItem styles={styles} title={title} link={link} id={index} />
          )
        }
      </nav>
    )
  }
}

export {
  Navigation
}
