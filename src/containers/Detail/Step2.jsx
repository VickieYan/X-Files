import React, { Component } from 'react'
import { red50, pink50, purple50, deepPurple50, indigo50, blue50, lightBlue50, cyan50, teal50, green50, lightGreen50, lime50, yellow50, amber50, orange50, deepOrange50 } from 'material-ui/styles/colors'
// import { red100, pink100, purple100, deepPurple100, indigo100, blue100, lightBlue100, cyan100, teal100, green100, lightGreen100, lime100, yellow100, amber100, orange100, deepOrange100 } from 'material-ui/styles/colors'
// import { redA100, pinkA100, purpleA100, deepPurpleA100, indigoA100, blueA100, lightBlueA100, cyanA100, tealA100, greenA100, lightGreenA100, limeA100, yellowA100, amberA100, orangeA100, deepOrangeA100 } from 'material-ui/styles/colors'
// import { redA700, pinkA700, purpleA700, deepPurpleA700, indigoA700, blueA700, lightBlueA700, cyanA700, tealA700, greenA700, lightGreenA700, limeA700, yellowA700, amberA700, orangeA700, deepOrangeA700 } from 'material-ui/styles/colors'
import Tag from '../../components/Tag/Tag'
import styles from './index.scss'

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hobbies: ['历史', '旅行', '手绘', '摄影', '电影',
            '小说', '漫画', '美食', '人文社科', '互联网',
            '科幻', '国学', '心理学', '科技', '生活方式',
            '音乐', '金融', '生物学', '汽车', '篮球',
        ],
            colors: [red50, pink50, purple50, deepPurple50, indigo50, blue50, lightBlue50, cyan50, teal50, green50, lightGreen50, lime50, yellow50, amber50, orange50, deepOrange50],
            // colors: [red100, pink100, purple100, deepPurple100, indigo100, blue100, lightBlue100, cyan100, teal100, green100, lightGreen100, lime100, yellow100, amber100, orange100, deepOrange100],
            // colors: [redA100, pinkA100, purpleA100, deepPurpleA100, indigoA100, blueA100, lightBlueA100, cyanA100, tealA100, greenA100, lightGreenA100, limeA100, yellowA100, amberA100, orangeA100, deepOrangeA100]
            // colors: [redA700, pinkA700, purpleA700, deepPurpleA700, indigoA700, blueA700, lightBlueA700, cyanA700, tealA700, greenA700, lightGreenA700, limeA700, yellowA700, amberA700, orangeA700, deepOrangeA700]
            
        }
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    getRandomColor() {
        const { colors } = this.state
        const index = Math.floor(colors.length * Math.random())
        return colors[index]
    }

    render() {
        return (
            <div className={styles.chipWrapper}>
                {
                    this.state.hobbies.map((item, index) => (
                        <Tag
                          content={item}
                          key={index}
                          color={this.getRandomColor()}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Step2
