import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { hobbies } from '../../../static/data/words'
import styles from './Edit.scss'
import AppBar from '../../components/AppBar/AppBar'
import Form from '../../components/Form/Form'
import Card from '../../components/Card/Card'
import EditCard from './EditCard'
import { colorsA, colorsB } from '../../../static/data/color'
import Memorabilia from '../../components/Memorabilia/Memorabilia'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

class Edit extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            hobbies: ['美食', '互联网', '篮球', '美食'],
            skills: ['HTML', 'CSS', 'Javascript', 'Php', 'Java', 'Golang', 'Python'],
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleRequestDelete = this.handleRequestDelete.bind(this)
    }
    handleOpen() {
        this.setState({ isOpen: true })
    }
    handleClose() {
        this.setState({ isOpen: false })
    }
    handleRequestDelete() {
        // hanlde here
    }
    renderInfo() {
        const data = [
            { type: 'radio', label: '性别', name: 'sex', text: '男' },
            { type: 'text', label: '电话', name: 'tel', text: '17621973154' },
            { type: 'text', label: '邮箱', name: 'email', text: 'Ningersan@gmail.com' },
            { type: 'multiLine', label: '个人签名', name: 'signature', text: 'In me the tiger sniffs the rose' },
        ]
        return (
            <EditCard title="Public profile">
                <div className={styles.fields}>
                    {data.map((props, index) => <Form key={index} {...props} />)}
                </div>
                <div className={styles.avatar}>
                    <ImageUpload />
                </div>
            </EditCard>
        )
    }
    renderHobbies() {
        const { hobbies } = this.state
        const buttonStyle = { marginLeft: '10px', width: '40px', height: '40px' }
        return (
            <EditCard title="爱好">
                <div className={styles['chip-wrap']}>
                    {hobbies.map((item, index) => (
                        <Chip
                          key={index}
                          className={styles.chip}
                          backgroundColor={colorsB[index]}
                          onRequestDelete={this.handleRequestDelete}
                        >
                            {item}
                        </Chip>
                    ))}
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={this.handleOpen}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </EditCard>
        )
    }
    renderSkills() {
        const { skills } = this.state
        const buttonStyle = { marginLeft: '10px', width: '40px', height: '40px' }
        return (
            <EditCard title="技能">
                <div className={styles['chip-wrap']}>
                    {skills.map((item, index) => (
                        <Chip
                          key={index}
                          className={styles.chip}
                          backgroundColor={colorsA[index]}
                          onRequestDelete={this.handleRequestDelete}
                        >
                            {item}
                        </Chip>
                    ))}
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={this.handleOpen}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </EditCard>
        )
    }
    renderExperience() {
        const minDate = new Date()
        const maxDate = new Date()
        minDate.setFullYear(minDate.getFullYear() - 1)
        minDate.setHours(0, 0, 0, 0)
        maxDate.setFullYear(maxDate.getFullYear() + 1)
        maxDate.setHours(0, 0, 0, 0)
        const style = { width: '1000px', margin: '0 auto', padding: '16px', backgroundColor: '#fff' }
        return (
            <div className={styles.experience}>
                <Memorabilia style={style} date={minDate} text="这是一段经历" />
                <Memorabilia style={style} date={maxDate} text="这是另一段经历" />
            </div>
        )
    }
    renderDialog() {
        return (
            <div className={styles['dialog-wrap']}>
                <Card
                  hasButton
                  style={{ backgroundColor: '#fff', width: '1000px', margin: 'auto auto' }}
                  title="感兴趣的话题"
                  colors={colorsA}
                  words={hobbies}
                  onClose={this.handleClose}
                />
            </div>
        )
    }
    render() {
        return (
            <div className={styles.wrap}>
                <AppBar {...this.props}/>
                {this.renderInfo()}
                {this.renderHobbies()}
                {this.renderSkills()}
                {/* {this.renderExperience()} */}
                {this.state.isOpen && this.renderDialog()}
            </div>
        )
    }
}

export default Edit
