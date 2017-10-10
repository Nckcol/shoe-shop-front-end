import React from 'react'
import PropTypes from 'prop-types'

const CurrentNavigationItem = props => {
  const {styles, title} = props

  return (
    <span className={styles.CurrentItem}>{title}</span>
  )
}

CurrentNavigationItem.propTypes = {
  styles: PropTypes.object,
  title: PropTypes.string,
  link: PropTypes.string
}

export {
  CurrentNavigationItem
}
