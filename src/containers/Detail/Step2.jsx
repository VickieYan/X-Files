import React, { Component } from 'react'
import { Card } from '../../components/'
import { hobbies, skills } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'

class Step2 extends Component {
    render() {
        return (
            <div>
                <Card
                  name="hobbies"
                  title="请选择感兴趣的话题"
                  colors={colorsB}
                  words={hobbies}
                />
                <Card
                  name="skills"
                  title="请选择你掌握的技能"
                  colors={colorsB}
                  words={skills}
                />
            </div>
        )
    }
}

export default Step2
