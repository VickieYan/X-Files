import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCoreImageUpload from 'react-core-image-upload'
import { Timeline } from 'antd'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Clear from 'material-ui/svg-icons/content/clear'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { uploadData } from '../../actions/userAction'
import { AppBar, Form, Card, Memorabilia, ImageUpload } from '../../components/'
import EditCard from './EditCard'
import { hobbies, skills } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'
import styles from './Edit.scss'

@connect(
    state => state.user,
    { uploadData },
)
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            dialogType: null,
            photos: ['1'],
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleRequestDelete = this.handleRequestDelete.bind(this)
        this.formatDate = this.formatDate.bind(this)
    }
    handleOpen(type, index) {
        this.setState({
            isOpen: true,
            dialogType: type,
            index: index || 0,
        })
    }
    handleClose() {
        this.setState({ isOpen: false })
    }
    handleRequestDelete() {
        // hanlde here
    }

    formatDate(value) {
        const date = new Date(value)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const time = `${year}-${month}-${day}`
        return time
    }

    renderInfo() {
        const {
            sex,
            phoneNumber,
            emial,
            signature,
            linkedin,
            github,
            twitter,
            avatar,
        } = this.props
        const data = [
            { type: 'radio', label: '性别', name: 'sex', text: sex, options: ['男', '女'] },
            { type: 'radio', label: '是否单身', name: 'isSingle', text: phoneNumber, options: ['是', '否'] },
            { type: 'text', label: '电话', name: 'tel', text: '17621973154' },
            { type: 'text', label: '邮箱', name: 'email', text: emial },
            { type: 'multiLine', label: '个人签名', name: 'signature', text: signature },
            { type: 'text', label: '微博', name: 'linkedin', text: linkedin },
            { type: 'text', label: 'github', name: 'github', text: github },
            { type: 'text', label: 'twitter', name: 'twitter', text: twitter },
        ]
        return (
            <EditCard title="Public profile">
                <div className={styles.fields}>
                    {data.map((props, index) => <Form key={index} {...props} />)}
                </div>
                <div className={styles.avatar}>
                    <ImageUpload avatar={avatar} />
                </div>
            </EditCard>
        )
    }
    renderPhotos() {
        const { photos } = this.state
        const { avatar } = this.props
        const { length } = photos
        return (
            <EditCard title="Photo">
                <div className={styles['photo-wrap']}>
                    {photos.map((photo, index) => (
                        <ImageUpload
                          key={index}
                          text="更换图片"
                          cropRatio="5:7"
                          avatar={avatar}
                          className={styles['photo-upload-wrap']}
                          previewClassName={styles['photo-preview']}
                          imgClassName={styles['preview-img']}
                          btnClassName={styles['photo-upload-btn']}
                        />
                    ))}
                    {length < 3 &&
                        <ReactCoreImageUpload
                          crop
                        //   resize="local"
                          text="+"
                          cropRatio="5:7"
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
        const { hobbies } = this.props
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
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={() => { this.handleOpen('hobbies') }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </EditCard>
        )
    }
    renderSkills() {
        const { skills } = this.props
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
                    <FloatingActionButton mini secondary style={buttonStyle} onClick={() => { this.handleOpen('skills') }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </EditCard>
        )
    }
    renderExperience() {
        const { contributes } = this.props
        return (
            <EditCard title="Experience">
                <div className={styles['timeline-wrap']}>
                    <Timeline pending="to be continue...">
                        {contributes.map((item, index) => (
                            <Timeline.Item key={index} className={styles['timeline-item']} color="pink">
                                <h3>From {this.formatDate(item.startTime)} to {this.formatDate(item.endTime)}</h3>
                                <p>{item.duty}</p>
                                <div className={styles['edit-btn-wrap']}>
                                    <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }} onClick={() => { this.handleOpen('experience', index) }}>
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
        const { dialogType, index } = this.state
        const { contributes } = this.props
        switch (dialogType) {
            case 'hobbies':
                return (
                    <div className={styles['dialog-wrap']}>
                        <Card
                          hasButton
                          name={dialogType}
                          style={{ backgroundColor: '#fff', width: '1000px', margin: 'auto auto' }}
                          title="感兴趣的话题"
                          colors={colorsA}
                          words={hobbies}
                          onClose={this.handleClose}
                        />
                    </div>
                )
            case 'skills':
                return (
                    <div className={styles['dialog-wrap']}>
                        <Card
                          hasButton
                          name={dialogType}
                          style={{ backgroundColor: '#fff', width: '1000px', margin: 'auto auto' }}
                          title="感兴趣的话题"
                          colors={colorsA}
                          words={skills}
                          onClose={this.handleClose}
                        />
                    </div>
                )
            case 'experience':
                return (
                    <div className={styles['dialog-wrap']}>
                        <Memorabilia
                          hasButton
                          startTime={contributes[index].startTime}
                          endTime={contributes[index].endTime}
                          text={contributes[index].duty}
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
