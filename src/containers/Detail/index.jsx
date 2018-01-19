import React, { Component } from 'react'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
// import AppBar from 'material-ui/AppBar'
// import IconButton from 'material-ui/IconButton'
// import FontIcon from 'material-ui/FontIcon'
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
        const { stepIndex } = this.state
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        })
    }

    handlePrev() {
        const { stepIndex } = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }
    render() {
        const { finished, stepIndex } = this.state
        const contentStyle = {
            margin: '0 16px',
        }

        return (
            <div className={styles.main}>
                {/* <AppBar
                  iconElementRight={<FlatButton label="New egg" />}
                /> */}
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>基本信息</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>个人爱好</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>工作贡献</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <p>
                                <a
                                  href="#"
                                //   role="button"
                                //   tabIndex="0"
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
