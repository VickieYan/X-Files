import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { grey50, grey900 } from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card'
import styles from './Slider.scss'

class Slider extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            background: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired).isRequired,
        itemWidth: PropTypes.number,
        spacing: PropTypes.number,
    }

    static defaultProps = {
        itemWidth: 210,
        spacing: 4,
    }

    constructor() {
        super()
        this.state = { offset: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.distance = this.list.offsetWidth
        document.addEventListener('resize', () => {
            this.distance = this.list.offsetWidth
        })
    }

    tick(offset) {
        this.setState({ offset })
    }

    moveTo(next) {
        const { offset } = this.state
        const { data, itemWidth, spacing } = this.props
        let current = offset + next

        // calculate width and limit
        const totalWidth = data.length * (itemWidth + spacing)
        const limit = totalWidth - this.list.offsetWidth

        // handle limit case
        if (current > 0) {
            current = 0
        }

        if (current < -limit) {
            current = -limit
        }

        this.tick(current)
    }

    handleClick(direction) {
        return () => {
            const offset = { toLeft: this.distance, toRight: -this.distance }[direction]
            this.moveTo(offset)
        }
    }

    renderCard(item, index) {
        const { itemWidth, spacing } = this.props
        const {
            title,
            subtitle,
            avatar,
            img,
            background,
            color,
        } = item
        const cardStyle = {
            marginRight: `${spacing}px`,
            borderRadius: '2px',
            backgroundColor: background,
        }
        return (
            <Card key={index} style={cardStyle}>
                <CardMedia style={{ width: `${itemWidth}px` }}>
                    <img src={img} width={itemWidth} height="118" alt="" />
                </CardMedia>
                <CardHeader
                  style={{ marginTop: '-17%' }}
                  avatar={avatar}
                />
                <CardTitle
                  title={title}
                  titleColor={color}
                  subtitle={subtitle}
                  subtitleColor={color}
                  style={{ marginTop: '-35px', backgoundColor: 'rgb(65, 65, 65)' }}
                />
            </Card>
        )
    }

    render() {
        const { offset } = this.state
        const { data } = this.props
        const listStyle = { transform: `translateX(${offset}px)` }
        return (
            <div className={styles.wrap}>
                <div className={styles['wrap-inner']}>
                    <div ref={(el) => { this.list = el }} className={styles.list} style={listStyle}>
                        {data.map((item, index) =>
                            this.renderCard(item, index))
                        }
                    </div>
                    <div className={styles.control}>
                        <div className={styles['control-left']}>
                            <FloatingActionButton
                              mini
                              backgroundColor={grey50}
                              iconStyle={{ fill: grey900 }}
                              onClick={this.handleClick('toLeft')}
                            >
                                <HardwareKeyboardArrowLeft />
                            </FloatingActionButton>
                        </div>
                        <div className={styles['control-right']}>
                            <FloatingActionButton
                              mini
                              backgroundColor={grey50}
                              iconStyle={{ fill: grey900 }}
                              onClick={this.handleClick('toRight')}
                            >
                                <HardwareKeyboardArrowRight />
                            </FloatingActionButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider
