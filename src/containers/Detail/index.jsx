import React, { Component } from 'react'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import styles from './index.scss'

class MyStepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finished: false,
            stepIndex: 1,
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Step1 />
            case 1:
                return <Step2 />
            case 2:
                return <Step3 />
            default:
                return 'You\'re a long way from home sonny jim!'
        }
    }

    handleNext() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        })
    }

    handlePrev() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }
    render() {
        const { finished, stepIndex } = this.state
        const contentStyle = { margin: '0 16px' }
        const group = ['基本信息', '技能爱好', '工作贡献']
        return (
            <div className={styles.main}>
                <div style={{ width: '70%', maxWidth: '80%', margin: 'auto' }}>
                    <Stepper activeStep={stepIndex}>
                        {group.map((item, index) => (
                            <Step key={index}>
                                <StepLabel>{item}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <p>
                                <a
                                  href="#"
                                  onClick={(event) => {
                                        event.preventDefault()
                                        this.setState({ stepIndex: 0, finished: false })
                                    }}
                                >
                  Click here
                                </a> to reset the example.
                            </p>
                        ) : (
                            <div>
                                <div>{this.getStepContent(stepIndex)}</div>
                                <div style={{ marginTop: 12 }}>
                                    <FlatButton
                                      label="Back"
                                      disabled={stepIndex === 0}
                                      onClick={this.handlePrev}
                                      style={{ marginRight: 12 }}
                                    />
                                    <RaisedButton
                                      label={stepIndex === 2 ? 'Finish' : 'Next'}
                                      primary
                                      onClick={this.handleNext}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyStepper
