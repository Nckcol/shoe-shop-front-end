import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.scss'

class Product extends Component {
  render () {
    const { title } = this.props
    
    return (
      <div className={styles.Product}>
        <div className={styles.}></div>
        Product {title}
      </div>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.arrayOf(PropTypes.string).isRequired
}
Product.defaultProps = {}

export {
  Product
}
