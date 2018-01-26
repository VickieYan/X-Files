import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import { Timeline, Upload, Icon, Modal } from 'antd'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Clear from 'material-ui/svg-icons/content/clear'
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
            dialogType: null,
            hobbies: ['美食', '互联网', '篮球', '美食'],
            skills: ['HTML', 'CSS', 'Javascript', 'Php', 'Java', 'Golang', 'Python'],
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
    // upload
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        })
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

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
        // const minDate = new Date()
        // const maxDate = new Date()
        // minDate.setFullYear(minDate.getFullYear() - 1)
        // minDate.setHours(0, 0, 0, 0)
        // maxDate.setFullYear(maxDate.getFullYear() + 1)
        // maxDate.setHours(0, 0, 0, 0)
        // const style = { width: '1000px', margin: '0 auto', padding: '16px', backgroundColor: '#fff' }
        // return (
        //     <div className={styles.experience}>
        //         <Memorabilia style={style} date={minDate} text="这是一段经历" />
        //         <Memorabilia style={style} date={maxDate} text="这是另一段经历" />
        //     </div>
        // )
        return (
            <EditCard
              isEditable
              title="Experience"
              onClick={this.handleOpen}
            >
                <div className={styles['timeline-wrap']}>
                    <Timeline pending="to be continue...">
                        <Timeline.Item className={styles['timeline-item']} color="pink">
                            <span>Create a services site 2015-09-01</span>
                            <div className={styles['edit-btn-wrap']}>
                                <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }} onClick={() => { this.handleOpen('experience') }}>
                                    <EditorModeEdit />
                                </IconButton>
                                <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }}>
                                    <Clear />
                                </IconButton>
                            </div>
                        </Timeline.Item>
                        {/* <Timeline.Item color="pink">
                            <span>Solve initial network problems 2015-09-01</span>
                            <span style={{ display: 'inline-block' }}>
                                <EditorModeEdit
                                  iconStyle={test.smallIcon}
                                  style={test.small}
                                />
                            </span>
                        </Timeline.Item> */}
                        <Timeline.Item color="pink">
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item color="pink">
                            Network problems being solved 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item color="pink">
                            Create a services site 2015-09-01
                        </Timeline.Item>
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
                <AppBar />
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
