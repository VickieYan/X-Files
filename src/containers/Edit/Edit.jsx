import React, { Component } from 'react'
import ReactCoreImageUpload from 'react-core-image-upload'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Clear from 'material-ui/svg-icons/content/clear'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Timeline } from 'antd'
import { AppBar, Form, Card, Memorabilia, ImageUpload } from '../../components/'
import EditCard from './EditCard'
import Upload from './Upload'
import { hobbies } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'
import styles from './Edit.scss'

class Edit extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            dialogType: null,
            hobbies: ['美食', '互联网', '篮球', '美食'],
            skills: ['HTML', 'CSS', 'Javascript', 'Php', 'Java', 'Golang', 'Python'],
            photos: [],
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleRequestDelete = this.handleRequestDelete.bind(this)
    }
    handleOpen(type) {
        this.setState({
            isOpen: true,
            dialogType: type,
         })
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
            { type: 'text', label: '微博', name: 'weibo', text: 'https://weibo.com/ningersan' },
            { type: 'text', label: 'github', name: 'github', text: 'https://github.com/Ningersan' },
            { type: 'text', label: 'twitter', name: 'twitter', text: 'http://twitter.com' },
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
    renderPhotos() {
        const { photos } = this.state
        const { length } = photos
        return (
            <EditCard title="Photo">
                <div className={styles['photo-wrap']}>
                    {photos.map((photo, index) => <Upload key={index} />)}
                    {length < 3 &&
                        <ReactCoreImageUpload
                          crop
                          resize="local"
                          text="+"
                          className={styles['upload-photo-btn']}
                          inputOfFile="avatar" // 上传服务器对应表单name
                          url="http://wsmis053:6141/user/testUpdate" // 服务器上传位置
                          imageUploaded={this.imageuploaded}
                        />
                    }
                </div>
            </EditCard>
        )
    }
    renderHobbies() {
        const { hobbies } = this.state
        const buttonStyle = { marginLeft: '10px', width: '40px', height: '40px' }
        return (
            <EditCard title="Hobby">
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
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={() => { this.handleOpen('hobbit') }}>
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
            <EditCard title="Skill">
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
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={() => { this.handleOpen('skill') }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </EditCard>
        )
    }
    renderExperience() {
        const experience = [
            { startTime: '2015-09-01', endTime: '2015-09-02', work: 'Create a services site' },
            { startTime: '2015-10-10', endTime: '2015-09-05', work: 'Solve initial network problems' },
            { startTime: '2015-10-11', endTime: '2015-09-02', work: 'Technical testing' },
            { startTime: '2015-11-22', endTime: '2015-09-06', work: 'twork problems being solved' },
        ]
        return (
            <EditCard title="Experience">
                <div className={styles['timeline-wrap']}>
                    <Timeline pending="to be continue...">
                        {experience.map((item, index) => (
                            <Timeline.Item key={index} className={styles['timeline-item']} color="pink">
                                <span>{item.work} {item.startTime}~{item.endTime}</span>
                                <div className={styles['edit-btn-wrap']}>
                                    <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }} onClick={() => { this.handleOpen('experience') }}>
                                        <EditorModeEdit />
                                    </IconButton>
                                    <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }}>
                                        <Clear />
                                    </IconButton>
                                </div>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </EditCard>
        )
    }
    renderDialog() {
        const { dialogType } = this.state
        switch (dialogType) {
            case 'hobbit':
            case 'skill':
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
            case 'experience':
                return (
                    <div className={styles['dialog-wrap']}>
                        <Memorabilia
                          hasButton
                          style={{ backgroundColor: '#fff', width: '1000px', margin: 'auto auto' }}
                          onClose={this.handleClose}
                        />
                    </div>
                )
            default:
                return <div>my name is vk</div>
        }
    }
    render() {
        return (
            <div className={styles.wrap}>
                <AppBar {...this.props} />
                {this.renderInfo()}
                {this.renderHobbies()}
                {this.renderSkills()}
                {this.renderPhotos()}
                {this.renderExperience()}
                {this.state.isOpen && this.renderDialog()}
            </div>
        )
    }
}

export default Edit
