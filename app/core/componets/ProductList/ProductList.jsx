import React, { Component } from 'react'
import styles from './ProductList.scss'
import { Product } from '../Product/index.js'

class ProductList extends Component {
  render () {
    const {list} = this.props
    return (
      <div className={styles.Root}>
        { list.map((product, index) => <Product key={index} {...product} />) }
      </div>
    )
  }
}

ProductList.propTypes = {

}

export {
  ProductList
}
