import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card'
import styles from './Home.scss'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            offset: 0,
            distance: 600,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    tick(offset) {
        this.setState({ offset })
    }

    moveTo(next) {
        const { offset } = this.state
        const current = offset + next
        // const limit = 686

        if (current <= -1300 || current > 0) {
            return
        }

        this.tick(current)
    }

    handleClick(e) {
        const { name } = e.target
        const { distance } = this.state
        const offset = { toLeft: distance, toRight: -distance }[name]
        this.moveTo(offset)
    }

    renderCard() {
        return (
            <Card style={{ width: '210px', height: '236px' }}>
                <CardMedia>
                    <img src="../../../../static/images/xiao.jpg" alt="" width="320" height="118" />
                </CardMedia>
                <CardHeader
                    style={{ marginTop: '-17%' }}
                    avatar="../../../../static/images/dota.jpg"
                />
                <CardTitle
                  title="Dark Ranger"
                  subtitle="Dota2"
                  style={{ marginTop: '-35px', backgoundColor: 'rgb(65, 65, 65)' }}
                />
            </Card>
        )
    }

    render() {
        const { offset } = this.state
        const listStyle = {
            transform: `translateX(${offset}px)`,
        }
        return (
            <div className={styles['list-wrap']}>
                <div className={styles['list-wrap-inner']}>
                    <div className={styles.list} style={listStyle}>
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                        {this.renderCard()}
                    </div>
                    <button type="button" name="toLeft" onClick={this.handleClick}>←</button>
                    <button type="button" name="toRight" onClick={this.handleClick}>→</button>
                </div>
            </div>
        )
    }
}

export default Home
