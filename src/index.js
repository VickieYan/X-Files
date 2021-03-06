import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App/App'
import './styles/global.scss'
import './styles/normalize.css'

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(App)

// Webpack Hot Module Replacement API
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept()
}
