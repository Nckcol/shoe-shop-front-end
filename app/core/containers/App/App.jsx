import React, { Component } from 'react'
import styles from './App.scss'
import { Header } from '../../componets/Header/index'

class App extends Component {
  mainContent () {
    return (
      <div>
        The main content
        {
          Array.from(new Array(100)).map(
            (_, i) => <p>{i}</p>
          )
        }
      </div>
    )
  }
  
  render () {
    return (
      <div className={styles.Root}>
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles.Content}>
          { this.mainContent() }
        </div>
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
