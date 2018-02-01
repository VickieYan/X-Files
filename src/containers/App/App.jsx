import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey700, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from '../../store/store'
import AuthRoute from '../../components/AuthRoute/authroute'
import {
    Home,
    Edit,
    Login,
    Detail,
    Profile,
} from '../index'
import styles from './App.scss'

class App extends Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: blueGrey700,
                textColor: blueGrey700,
                alternateTextColor: white,
            },
            appBar: {
              height: 50,
            },
        })
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className={styles.container}>
                        <Router>
                            <Route render={({ location }) => (
                                <CSSTransitionGroup
                                  transitionName="fade"
                                  transitionEnterTimeout={300}
                                  transitionLeaveTimeout={300}
                                >
                                    <AuthRoute />
                                    <Switch key={location.key} location={location}>
                                        <Route exact path="/" component={Home} location={location} />
                                        <Route path="/login" component={Login} location={location} />
                                        <Route path="/detail" component={Detail} location={location} />
                                        <Route path="/profile" component={Profile} location={location} />
                                        <Route path="/edit" component={Edit} location={location} />
                                    </Switch>
                                </CSSTransitionGroup>
                            )}
                            />
                        </Router>
                    </div>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default App
