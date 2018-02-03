import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCoreImageUpload from 'react-core-image-upload'
import LinearProgress from 'material-ui/LinearProgress'
import { Timeline } from 'antd'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Clear from 'material-ui/svg-icons/content/clear'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { uploadData, submitData, getSelfInfo, enhanceSubmit, redirectSuccess, fetchUserStart, fetchUserSuccess } from '../../actions/userAction'
import { AppBar, Form, Card, Memorabilia, ImageUpload } from '../../components/'
import EditCard from './EditCard'
import { hobbies, skills } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'
import { formatDate } from '../../scripts/utils'
import styles from './Edit.scss'

@connect(
    state => state.user,
    { uploadData, getSelfInfo, enhanceSubmit, redirectSuccess, fetchUserStart, fetchUserSuccess },
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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEnhanceSubmit = this.handleEnhanceSubmit.bind(this)
        // this.renderAddExperience = this.renderAddExperience.bind(this)
    }
    componentDidMount() {
        redirectSuccess('./edit')
    }
    handleOpen(type, index) {
        this.setState({
            isOpen: true,
            dialogType: type,
            index,
        })
    }

    handleEnhanceSubmit() {
        this.setState({ isOpen: false })
        this.props.enhanceSubmit()
    }

    handleClose() {
        this.setState({ isOpen: false })
        const {
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
            department,
        } = this.props
        submitData({
            Sex: sex,
            IsSingle: isSingle,
            Department: department,
            PhoneNumber: phoneNumber,
            Hometown: hometown,
            Signature: signature,
            GitHub: github,
            LinkedIn: linkedin,
            Twitter: twitter,
            Hobbies: hobbies,
            Skills: skills,
            Contributes: contributes,
        })
    }
    handleRequestDelete(index, type) {
        // hanlde here
        const {
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
            department,
        } = this.props
        let temp = null
        if (type === 'hobbies') {
            temp = hobbies.slice()
        } else {
            temp = skills.slice()
        }
        temp.splice(index, 1)
        this.props.uploadData({ [type]: temp })
        this.props.enhanceSubmit()
    }
    handleRemove() {
        const { contributes, uploadData } = this.props
        const { index } = this.state
        const temp = contributes.slice()
        temp.splice(index, 1)
        uploadData({ contributes: temp })
        this.props.enhanceSubmit()
    }
    

    renderInfo() {
        const {
            sex,
            isSingle,
            phoneNumber,
            email,
            signature,
            linkedin,
            github,
            twitter,
            avatar,
            uploadData,
            fetchUser,
        } = this.props
        const data = [
            { type: 'radio', label: '性别', name: 'sex', text: sex, options: ['男', '女'] },
            { type: 'radio', label: '是否单身', name: 'isSingle', text: isSingle, options: ['是', '否'] },
            { type: 'text', label: '电话', name: 'phoneNumber', text: phoneNumber },
            { type: 'text', label: '邮箱', name: 'email', text: email },
            { type: 'multiLine', label: '个人签名', name: 'signature', text: signature },
            { type: 'text', label: 'linkedin', name: 'linkedin', text: linkedin },
            { type: 'text', label: 'github', name: 'github', text: github },
            { type: 'text', label: 'twitter', name: 'twitter', text: twitter },
        ]
        return (
            <EditCard title="个人中心">
                <div className={styles.fields}>
                    {data.map((item, index) => <Form key={index} {...item} data={{ ...this.props }} uploadData={uploadData} submitData={submitData} />)}
                </div>
                <div className={styles.avatar}>
                    <ImageUpload
                      num={6}
                      fetchUser={fetchUser}
                      fetchUserStart={fetchUserStart}
                      fetchUserSuccess={fetchUserSuccess}
                      avatar={this.props.avatar}
                      url="/user/updateAvatar"
                      uploadData={uploadData}
                      inputOfFile="Avatar"
                    />
                </div>
            </EditCard>
        )
    }
    renderPhotos() {
        const { photograph1, photograph2, photograph3, indexShowPhotograph, uploadData, fetchUserStart, fetchUserSuccess, fetchUser } = this.props
        return (
            <EditCard title="个人相册">
                <div className={styles['photo-wrap']}>
                    <ImageUpload
                      num={7}
                      fetchUser={fetchUser}
                      fetchUserStart={fetchUserStart}
                      fetchUserSuccess={fetchUserSuccess}
                      inputOfFile="IndexShowPhotograph"
                      url="/user/IndexShowPhotograph"
                      uploadData={uploadData}
                      avatar={indexShowPhotograph}
                      text="更换封面"
                      cropRatio="5:7"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      num={8}
                      fetchUser={fetchUser}
                      fetchUserStart={fetchUserStart}
                      fetchUserSuccess={fetchUserSuccess}
                      inputOfFile="Photograph1"
                      url="/user/Photograph1"
                      uploadData={uploadData}
                      avatar={photograph1}
                      text="更换图片1"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      num={9}
                      fetchUser={fetchUser}
                      fetchUserStart={fetchUserStart}
                      fetchUserSuccess={fetchUserSuccess}
                      inputOfFile="Photograph2"
                      url="/user/Photograph2"
                      uploadData={uploadData}
                      avatar={photograph2}
                      text="更换图片2"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      num={10}
                      fetchUser={fetchUser}
                      fetchUserStart={fetchUserStart}
                      fetchUserSuccess={fetchUserSuccess}
                      inputOfFile="Photograph3"
                      url="/user/Photograph3"
                      uploadData={uploadData}
                      avatar={photograph3}
                      text="更换图片3"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                </div>
            </EditCard>
        )
    }
    renderHobbies() {
        const { hobbies } = this.props
        const buttonStyle = { marginLeft: '10px', width: '40px', height: '40px' }
        return (
            <EditCard title="感兴趣的话题">
                <div className={styles['chip-wrap']}>
                    {hobbies.map((item, index) => (
                        <Chip
                          key={index}
                          className={styles.chip}
                          backgroundColor={colorsB[index]}
                          onRequestDelete={() => { this.handleRequestDelete(index, 'hobbies') }}
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
            <EditCard title="技能树">
                <div className={styles['chip-wrap']}>
                    {skills.map((item, index) => (
                        <Chip
                          key={index}
                          className={styles.chip}
                          backgroundColor={colorsA[index]}
                          onRequestDelete={() => { this.handleRequestDelete(index, 'skills') }}
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
            <EditCard title="工作经历">
                <div className={styles['timeline-wrap']}>
                    <Timeline>
                        {contributes.map((item, index) => (
                            <Timeline.Item key={index} className={styles['timeline-item']} color="pink">
                                <span>From {formatDate(item.startTime)} to {formatDate(item.endTime)}</span>
                                <h3>{item.duty}</h3>
                                <div className={styles['edit-btn-wrap']}>
                                    <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }} onClick={() => { this.handleOpen('experience', index) }}>
                                        <EditorModeEdit />
                                    </IconButton>
                                    <IconButton className={styles['edit-btn']} iconStyle={{ verticalAlign: '-5px' }} onClick={this.handleRemove}>
                                        <Clear />
                                    </IconButton>
                                </div>
                            </Timeline.Item>
                        ))}
                        <Timeline.Item className={styles['timeline-item']} color="pink">
                            <IconButton
                              tooltip="add experience"
                              className={styles['add-experience-btn']}
                              style={{ width: 20, height: 20 }}
                              iconStyle={{ marginTop: '-12px' }}
                              onClick={() => { this.handleOpen('experience') }}
                            >
                                <ContentAdd color="pink" />
                            </IconButton>
                        </Timeline.Item>
                        <Timeline.Item color="#ccc">to be continue...</Timeline.Item>
                    </Timeline>
                </div>
            </EditCard>
        )
    }
    renderDialog() {
        const { dialogType, index } = this.state
        const { contributes, uploadData } = this.props
        const startTime = index >= 0 ? new Date(contributes[index].startTime) : new Date()
        const endTime = index >= 0 ? new Date(contributes[index].endTime) : new Date()
        const duty = index >= 0 ? contributes[index].duty : ''
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
                          index={index}
                          hasButton
                          contributes={contributes}
                          onUploadData={uploadData}
                          enhanceSubmit={enhanceSubmit}
                          onEnhanceSubmit={this.handleEnhanceSubmit}
                          startTime={startTime}
                          endTime={endTime}
                          text={duty}
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
                {/* <div className={styles['loading-wrap']}>
                    <div div className={styles.loading}>
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube" />
                            <div className="sk-cube2 sk-cube" />
                            <div className="sk-cube4 sk-cube" />
                            <div className="sk-cube3 sk-cube" />
                        </div>
                    </div>
                </div> */}
                {/* { this.props.fetchUser && <LinearProgress mode="indeterminate" color="pink" style={{ position: 'fixed', top: '0px', zIndex:100 }} /> } */}
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
