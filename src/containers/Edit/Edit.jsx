import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import { Timeline, Upload, Icon, Modal } from 'antd'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Clear from 'material-ui/svg-icons/content/clear'
import { connect } from 'react-redux'
import { uploadData } from '../../actions/userAction'
import { hobbies, skills } from '../../../static/data/words'
import styles from './Edit.scss'
import AppBar from '../../components/AppBar/AppBar'
import Form from '../../components/Form/Form'
import Card from '../../components/Card/Card'
import EditCard from './EditCard'
import { colorsA, colorsB } from '../../../static/data/color'
import Memorabilia from '../../components/Memorabilia/Memorabilia'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

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
            index: null,
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
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
    // upload
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        })
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

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
        } = this.props
        const data = [
            { type: 'radio', label: '性别', name: 'sex', text: sex },
            { type: 'text', label: '电话', name: 'tel', text: phoneNumber },
            { type: 'text', label: '邮箱', name: 'email', text: emial },
            { type: 'multiLine', label: '个人签名', name: 'signature', text: signature },
            { type: 'text', label: 'linkedin', name: 'linkedin', text: linkedin },
            { type: 'text', label: 'github', name: 'github', text: github },
            { type: 'text', label: 'twitter', name: 'twitter', text: twitter }
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
        const { previewVisible, previewImage, fileList } = this.state
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
          )
        return (
            <EditCard title="Photography">
                <div className={styles['photo-wrap']}>
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                        {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
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
