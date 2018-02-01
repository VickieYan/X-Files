import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { ImageUpload } from '../../components/'
// import validator from '../../scripts/validator'
import styles from './Detail.scss'

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userinfo: [
                {
                    type: 'select', label: '性别', name: 'sex', options: ['男', '女', '其他'], num: 0,
                },
                {
                    type: 'select', label: '单身', name: 'isSingle', options: ['是', '否'], num: 0,
                },
                {
                    type: 'select', label: '部门', name: 'department', options: ['WWW Dev', 'SSL Dev', 'Bigdata Dev', 'WWW Test', 'SSL Test'], num: 0,
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
        const { avatar, onUploadData } = this.props
        return (
            <div className={styles['img-wrapper']}>
                <ImageUpload avatar={avatar} uploadData={onUploadData} url="/user/updateAvatar" inputOfFile="Avatar" />
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
                                return (
                                    <SelectField
                                      key={index}
                                      value={item.num}
                                      style={textFieldStyle}
                                      menuStyle={menuStyle}
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

    // handleChangePhone(event) {
    //   const { pattern, errorMsg } = validator.tel
    //   const phone = event.target.value.trim()
    //   const isValid = pattern.test(phone)
    //   const phoneErrorText = !isValid ? errorMsg : null

    //   this.setState({ phoneErrorText })
    // }

    // handleChangeEmail(event) {
    //   const { pattern, errorMsg } = validator.email
    //   const email = event.target.value.trim()
    //   const isValid = pattern.test(email)
    //   const emailErrorText = !isValid ? errorMsg : null

    //   this.setState({ emailErrorText })
    // }

    render() {
        return (
            <div>
                {this.renderAvatar()}
                {this.renderInfo()}
            </div>
        )
    }
}

export default Step1
