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
import Home from '../Home/Home'
import Edit from '../Edit/Edit'
import Login from '../Login/Login'
import Detail from '../Detail/index'
import Profile from '../Profile/Profile'
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
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={styles.container}>
                    {/* <Router>
                        <div>
                            <Redirect to="/login" />
                            <CSSTransitionGroup
                              transitionName="fade"
                              transitionEnterTimeout={500}
                              transitionLeaveTimeout={300}
                            >
                                <Route exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <Route path="/detail" component={Detail} />
                                <Route path="/profile" component={Profile} />
                                <Route path="/edit" component={Edit} />
                            </CSSTransitionGroup>
                        </div>
                    </Router> */}
                    <Router>
                        <Route render={({ location }) => (
                            <div>
                                {/* <Route
                                  exact
                                  path="/"
                                  render={() => (
                                      <Redirect to="/login" />
                                  )}
                                /> */}
                                {/* <Redirect to="/login" /> */}
                                <CSSTransitionGroup
                                  transitionName="fade"
                                  transitionEnterTimeout={300}
                                  transitionLeaveTimeout={300}
                                >
                                    <Switch key={location.key} location={location}>
                                        <Route exact path="/" component={Home} location={location} />
                                        <Route path="/login" component={Login} location={location} />
                                        <Route path="/detail" component={Detail} location={location} />
                                        <Route path="/profile" component={Profile} location={location} />
                                        <Route path="/edit" component={Edit} />
                                    </Switch>
                                </CSSTransitionGroup>
                            </div>
                        )}
                        />
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
