import React, { Component } from 'react'
import styles from './App.scss'
import { Header } from '../../componets/Header'
import { ProductList } from 'core/componets/ProductList'

class App extends Component {
  mainContent () {
    return (
      <div className={styles.Section}>
        <ProductList list={[
          {
            title: 'Product',
            brand: 'Puma'
          },
          {
            title: 'Wow!',
            brand: 'Nike'
          }
        ]} />
      </div>
    )
  }
  
  render () {
    return (
      <div className={styles.Root}>
        <div className={styles.Header}>
          <Header />
        </div>
        <main className={styles.Content}>
          { this.mainContent() }
        </main>
        <div className={styles.Footer}>
          ShoeShop 2017. Education project.
        </div>
      </div>
    )
  }
}

export {
  App
}
