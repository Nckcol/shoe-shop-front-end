import React, { Component } from 'react'

import styles from './Navigation.scss'
import { NavigationItem } from './NavigationItem'
import { CurrentNavigationItem } from './CurrentNavigationItem'

class Navigation extends Component {
  render () {
    const {list} = this.props
    
    return (
      <nav className={styles.Root}>
        {
          list.map(
            ({title, link, isCurrent}, index) => {
              const Item = isCurrent ? CurrentNavigationItem : NavigationItem
              return <Item key={index} styles={styles} title={title} link={link} />
            }
          )
        }
      </nav>
    )
  }
}

export {
  Navigation
}
