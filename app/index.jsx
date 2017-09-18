import 'whatwg-fetch'

import ReactDOM from 'react-dom'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import './index.scss'

import { App } from './core/containers/App'

const renderApp = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>
    ,
    document.getElementById('root')
  )
}

renderApp(App)
