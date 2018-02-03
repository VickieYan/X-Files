import React, { Component } from 'react'
import SearchIcon from 'material-ui/svg-icons/action/search'
import styles from './Search.scss'

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeydown = this.handleKeydown.bind(this)
    }

    handleKeydown(e) {
        const { onSearch } = this.props
        const { value } = this.input
        if (e.keyCode === 13) {
            onSearch(value)
        }
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
                  onKeyDown={this.handleKeydown}
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
