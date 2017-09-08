import ReactDOM from 'react-dom'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import './index.scss'

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

const App = () => <h1>Hello world</h1>

renderApp(App)