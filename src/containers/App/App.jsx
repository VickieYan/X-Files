import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey700, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { CSSTransitionGroup } from 'react-transition-group'
import {
    BrowserRouter as Router,
    Route,
    // Link
    Switch,
    Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Home from '../Home/Home'
import Edit from '../Edit/Edit'
import Login from '../Login/Login'
import Detail from '../Detail/index'
import Profile from '../Profile/Profile'
import AuthRoute from '../../components/AuthRoute/authroute'
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
                                <div>
                                    {/* <Redirect to="/login" /> */}
                                    <CSSTransitionGroup
                                      transitionName="fade"
                                      transitionEnterTimeout={300}
                                      transitionLeaveTimeout={300}
                                    >
                                        {/* <AuthRoute /> */}
                                        <Switch key={location.key} location={location}>
                                            <Route exact path="/" component={Home} location={location} />
                                            <Route path="/login" component={Login} location={location} />
                                            <Route path="/detail" component={Detail} location={location} />
                                            <Route path="/profile" component={Profile} location={location} />
                                            <Route path="/edit" component={Edit} location={location} />
                                        </Switch>
                                    </CSSTransitionGroup>
                                </div>
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
