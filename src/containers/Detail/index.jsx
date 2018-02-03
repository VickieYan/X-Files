import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import { CSSTransitionGroup } from 'react-transition-group'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { uploadData, logout, submitData, redirectSuccess } from '../../actions/userAction'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import styles from './Detail.scss'

@connect(
    state => state.user,
    { uploadData, logout, submitData, redirectSuccess },
)
class MyStepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepIndex: 0,
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    componentDidMount() {
        redirectSuccess('./detail')
    }

    getStepContent(stepIndex) {
        const { uploadData } = this.props
        switch (stepIndex) {
            case 0:
                return <Step1 onUploadData={uploadData} {...this.props} key={0} />
            case 1:
                return <Step2 key={1} {...this.props} />
            case 2:
                return <Step3 onUploadData={uploadData} {...this.props} key={2} />
            default:
                return <Step1 onUploadData={uploadData} {...this.props} key={0} />
        }
    }

    // esc() {
    //     this.props.logout(() => { this.props.history.push(this.props.redirectTo) })
    // }

    handleNext() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        const {
            submitData,
            sex,
            isSingle,
            phoneNumber,
            hometown,
            signature,
            github,
            linkedin,
            twitter,
            hobbies,
            skills,
            contributes,
            domain,
        } = this.props
        this.setState({
            stepIndex: stepIndex + 1,
        })
        if (stepIndex >= 2) {
            submitData({
                Sex: sex,
                IsSingle: isSingle,
                Domain: domain,
                PhoneNumber: phoneNumber,
                Hometown: hometown,
                Signature: signature,
                GitHub: github,
                LinkedIn: linkedin,
                Twitter: twitter,
                Hobbies: hobbies,
                Skills: skills,
                Contributes: contributes,
            }, () => { this.props.history.push('./') })
        }
    }

    handlePrev() {
        window.scrollTo(0, 0)
        const { stepIndex } = this.state
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 })
        }
    }

    render() {
        const { stepIndex } = this.state
        const group = ['基本信息', '技能爱好', '工作贡献']
        return (
            <div className={styles.main}>
                <div className={styles.wrap}>
                    <Stepper activeStep={stepIndex}>
                        {group.map((item, index) => (
                            <Step key={index}>
                                <StepLabel>{item}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className={styles['base-info-wrap']}>
                        <CSSTransitionGroup
                          transitionName="fade"
                          transitionEnterTimeout={200}
                          transitionLeaveTimeout={200}
                        >
                            {this.getStepContent(stepIndex)}
                        </CSSTransitionGroup>
                    </div>
                    <div className={styles['btn-more']}>
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
                        {/* <RaisedButton
                          label="退出"
                          primary
                          onClick={this.esc}
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyStepper
