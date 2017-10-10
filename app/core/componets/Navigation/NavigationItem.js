import React from 'react'
import PropTypes from 'prop-types'

const NavigationItem = props => {
  const {styles, title, link} = props

  return (
    <a className={styles.Item} href={link}>{title}</a>
  )
}

NavigationItem.propTypes = {
  styles: PropTypes.object,
  title: PropTypes.string,
  link: PropTypes.string
}

export {
  NavigationItem
}
