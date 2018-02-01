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
import { uploadData, submitData, getSelfInfo, test } from '../../actions/userAction'
import { AppBar, Form, Card, Memorabilia, ImageUpload } from '../../components/'
import EditCard from './EditCard'
import { hobbies, skills } from '../../../static/data/words'
import { colorsA, colorsB } from '../../../static/data/color'
import { formatDate } from '../../scripts/utils'
import styles from './Edit.scss'

@connect(
    state => state.user,
    { uploadData, getSelfInfo, test },
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
        this.props.test()
    }
    handleRemove() {
        const { contributes, uploadData } = this.props
        const { index } = this.state
        const temp = contributes.slice()
        temp.splice(index, 1)
        uploadData({ contributes: temp })
        this.props.test()
    }
    // formatDate(value) {
    //     if (value) {
    //         const date = new Date(value)
    //         const year = date.getFullYear()
    //         const month = date.getMonth() + 1
    //         const day = date.getDate()
    //         const time = `${year}-${month}-${day}`
    //         return time
    //     }
    //     return '近未来'
    // }

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
            <EditCard title="Public profile">
                <div className={styles.fields}>
                    {data.map((item, index) => <Form key={index} {...item} data={{ ...this.props }} uploadData={uploadData} submitData={submitData} />)}
                </div>
                <div className={styles.avatar}>
                    <ImageUpload avatar={avatar} url="/user/updateAvatar" uploadData={uploadData} />
                </div>
            </EditCard>
        )
    }
    renderPhotos() {
        const { photos } = this.state
        const { avatar, photograph1, photograph2, photograph3, indexShowPhotograph } = this.props
        const { length } = photos
        return (
            <EditCard title="Photo">
                <div className={styles['photo-wrap']}>
                    <ImageUpload
                      avatar={indexShowPhotograph}
                      text="更换封面"
                      cropRatio="5:7"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      avatar={photograph1}
                      text="更换图片"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      avatar={photograph2}
                      text="更换图片"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    <ImageUpload
                      avatar={photograph3}
                      text="更换图片"
                      className={styles['photo-upload-wrap']}
                      previewClassName={styles['photo-preview']}
                      imgClassName={styles['preview-img']}
                      btnClassName={styles['photo-upload-btn']}
                    />
                    {/* {photos.map((photo, index) => (
                        <ImageUpload
                          key={index}
                          text="更换图片"
                          className={styles['photo-upload-wrap']}
                          previewClassName={styles['photo-preview']}
                          imgClassName={styles['preview-img']}
                          btnClassName={styles['photo-upload-btn']}
                        />
                    ))} */}
                    {/* {length < 2 &&
                        <ReactCoreImageUpload
                          crop
                          text="+"
                          className={styles['upload-photo-btn']}
                          inputOfFile="avatar" // 上传服务器对应表单name
                          url="http://wsmis053:6141/user/testUpdate" // 服务器上传位置
                          imageUploaded={this.imageuploaded}
                        />
                    } */}
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
            <EditCard title="Skill">
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
            <EditCard title="Experience">
                <div className={styles['timeline-wrap']}>
                    <Timeline pending="to be continue...">
                        {contributes.map((item, index) => (
                            <Timeline.Item key={index} className={styles['timeline-item']} color="pink">
                                <h3>{item.duty}</h3>
                                <span>From {formatDate(item.startTime)} to {formatDate(item.endTime)}</span>
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
                          index={index}
                          hasButton
                          contributes={this.props.contributes}
                          onUploadData={this.props.uploadData}
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
