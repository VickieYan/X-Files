import React, { Component } from 'react'
import SearchIcon from 'material-ui/svg-icons/action/search'
import styles from './Search.scss'

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { onSearch } = this.props
        const { value } = this.input
        onSearch(value)
    }

    render() {
        return (
            <div className={styles.wrap}>
                <input
                  ref={(el) => { this.input = el }}
                  className={styles.search}
                  placeholder="搜索"
                />
                <div
                  className={styles.icon}
                  onClick={this.handleClick}
                >
                    <SearchIcon />
                </div>
            </div>
        )
    }
}

export default Search
