import React from 'react'
import styles from './Logotype.scss'
import logo from './shoeshop-logotype.png'

const Logotype = () => {
  return (
    <a className={styles.Root} title=''>
      <img src={logo} alt='ShoeShop' />
    </a>
  )
}

export {
  Logotype
}
