import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { ImageUpload } from '../../components/'
import EditCard from '../Edit/EditCard'
import styles from './Detail.scss'

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userinfo: [
                {
                    type: 'select', label: '性别', name: 'sex', options: ['男', '女', '其他'],
                },
                {
                    type: 'select', label: '单身', name: 'isSingle', options: ['是', '否'],
                },
                {
                    type: 'select', label: '部门', name: 'domain', options: ['WWW Dev', 'SSL Dev', 'Bigdata Dev', 'WWW Test', 'SSL Test'],
                },
                { type: 'text', label: '手机号码', name: 'phoneNumber' },
                { type: 'text', label: '家乡', name: 'hometown' },
                { type: 'text', label: '个性签名', name: 'signature' },
                { type: 'text', label: 'github', name: 'github' },
                { type: 'text', label: 'linkedin', name: 'linkedin' },
                { type: 'text', label: 'twitter', name: 'twitter' },
            ],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(type, index, value) {
        const { userinfo } = this.state
        const newUserinfo = userinfo.slice()
        const item = userinfo[index]
        switch (type) {
            case 'text':
                this.props.onUploadData({ [item.name]: value })
                break
            case 'select':
                newUserinfo[index].num = value
                this.setState({
                    userinfo: newUserinfo,
                })
                this.props.onUploadData({ [item.name]: item.options[value] })
                break
            default:
                break
        }
    }

    renderAvatar() {
        const { avatar, onUploadData, fetchUser, fetchUserStart, fetchUserSuccess } = this.props
        return (
            <div className={styles['img-wrapper']}>
                <ImageUpload
                  num={1}
                  fetchUser={fetchUser}
                  fetchUserStart={fetchUserStart}
                  fetchUserSuccess={fetchUserSuccess}
                  avatar={avatar}
                  uploadData={onUploadData}
                  url="/user/updateAvatar"
                  inputOfFile="Avatar"
                />
            </div>
        )
    }

    renderInfo() {
        const { userinfo } = this.state
        const textFieldStyle = { width: '400px', height: '80px' }
        const menuStyle = { marginTop: '25px' }
        return (
            <div className={styles.form}>
                {
                    userinfo.map((item, index) => {
                        switch (item.type) {
                            case 'select':
                            var getOptionIndex = userinfo[index].options.indexOf(this.props[item.name])
                            var selectValue = getOptionIndex === -1 ? null : getOptionIndex
                                return (
                                    <SelectField
                                      key={index}
                                      value={selectValue}
                                      style={textFieldStyle}
                                      menuStyle={menuStyle}
                                      floatingLabelText={item.label}
                                      // underlineStyle={underlineStyle}
                                      onChange={(ev, num) => { this.handleChange('select', index, num) }}
                                    >
                                        {item.options.map((item, index) => (
                                            <MenuItem
                                              key={index}
                                              value={index}
                                              primaryText={item}
                                            />
                                            ))}
                                    </SelectField>
                                )
                          case 'text':
                                return (
                                    <TextField
                                      key={index}
                                      name={item.name}
                                      value={this.props[item.name]}
                                      style={textFieldStyle}
                                      floatingLabelText={item.label}
                                      onChange={(ev, value) => { this.handleChange('text', index, value) }}
                                    />
                                )
                          default:
                              return <div key={index}>心塞塞</div>
                      }
                  })
              }
            </div>
        )
    }

    renderPhoto() {
        const {
            photograph1, photograph2, photograph3, indexShowPhotograph, uploadData, fetchUserStart, fetchUserSuccess, fetchUser,
        } = this.props
        return (
            <div className={styles.photo}>
                <div className={styles['photo-wrap']}>
                    <ImageUpload
                      num={2}
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
                      num={3}
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
                      num={4}
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
                      num={5}
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
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderAvatar()}
                {this.renderInfo()}
                {this.renderPhoto()}
            </div>
        )
    }
}

export default Step1
