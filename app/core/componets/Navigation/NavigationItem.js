import React, { Component } from 'react'

class NavigationItem extends Component {
  render () {
    const {styles, title, link} = this.props
    
    return (
      <a className={styles.Item} href={link}>{title}</a>
    )
  }
}

NavigationItem.propTypes = {}
NavigationItem.defaultProps = {}

export {
  NavigationItem
}
