import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import { hobbies, skills } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'

class Step2 extends Component {
    render() {
        return (
            <div>
                <Card
                  title="请选择感兴趣的话题"
                  colors={colorsA}
                  words={hobbies}
                />
                <Card
                  title="请选择你掌握的技能"
                  colors={colorsB}
                  words={skills}
                />
            </div>
        )
    }
}

export default Step2
