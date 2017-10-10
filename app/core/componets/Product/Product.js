import React, { Component } from 'react'
import styles from './index.scss'

type Props = {
    foo: number,
    bar?: string,
};

class Product extends Component<Props> {
  render () {
    const { title } = this.props

    return (
      <div className={styles.Product}>
        <div className={styles.Photo} />
        Product {title}
      </div>
    )
  }
}

export {
  Product
}
