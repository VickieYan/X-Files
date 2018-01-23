import React, { Component } from 'react'
import SearchIcon from 'material-ui/svg-icons/action/search'
import styles from './Search.scss'

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    render() {
        return (
            <div className={styles.wrap}>
                <input
                  className={styles.search}
                  placeholder="搜索"
                />
                <div
                  className={styles.icon}
                >
                    <SearchIcon />
                </div>
            </div>
        )
    }
}

export default Search
