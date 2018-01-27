import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { ImageUpload } from '../../components/'
import validator from '../../scripts/validator'
import styles from './Detail.scss'

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sexValue: 1,
            singleValue: 1,
            phoneErrorText: null,
            emailErrorText: null,
        }
        this.handleChangeSex = this.handleChangeSex.bind(this)
        this.handleChangeSingle = this.handleChangeSingle.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
    }

    handleChangeSex(event, index, sexValue) {
      this.setState({ sexValue })
    }

    handleChangeSingle(event, index, singleValue) {
      this.setState({ singleValue })
    }

    handleChangePhone(event) {
      const { pattern, errorMsg } = validator.tel
      const phone = event.target.value.trim()
      const isValid = pattern.test(phone)
      const phoneErrorText = !isValid ? errorMsg : null

      this.setState({ phoneErrorText })
    }

    handleChangeEmail(event) {
      const { pattern, errorMsg } = validator.email
      const email = event.target.value.trim()
      const isValid = pattern.test(email)
      const emailErrorText = !isValid ? errorMsg : null

      this.setState({ emailErrorText })
    }

    render() {
        const textFieldStyle = { width: '400px' }
        return (
            <div>
                <div className={styles['img-wrapper']}>
                    <ImageUpload />
                </div>
                <div className={styles.form}>
                    <TextField
                      name="cName"
                      style={textFieldStyle}
                      floatingLabelText="姓名（中文）"
                      floatingLabelFixed
                    />
                    <TextField
                      name="eName"
                      style={textFieldStyle}
                      floatingLabelText="姓名（英文）"
                      floatingLabelFixed
                    />
                    <SelectField
                      style={textFieldStyle}
                      floatingLabelText="性别"
                      value={this.state.sexValue}
                      onChange={this.handleChangeSex}
                    >
                        <MenuItem value={1} primaryText="男" />
                        <MenuItem value={2} primaryText="女" />
                    </SelectField>
                    <SelectField
                      style={textFieldStyle}
                      floatingLabelText="单身"
                      value={this.state.singleValue}
                      onChange={this.handleChangeSingle}
                    >
                        <MenuItem value={1} primaryText="是" />
                        <MenuItem value={2} primaryText="否" />
                    </SelectField>
                    <TextField
                      style={textFieldStyle}
                      name="department"
                      floatingLabelText="部门"
                      floatingLabelFixed
                    />
                    <TextField
                      style={textFieldStyle}
                      name="job"
                      floatingLabelText="岗位"
                      floatingLabelFixed
                    />
                    <TextField
                      style={textFieldStyle}
                      name="phone"
                      floatingLabelText="手机号码"
                      floatingLabelFixed
                      errorText={this.state.phoneErrorText}
                      onBlur={this.handleChangePhone}
                    />
                    <TextField
                      name="phone"
                      style={textFieldStyle}
                      floatingLabelText="邮箱"
                      floatingLabelFixed
                      errorText={this.state.emailErrorText}
                      onBlur={this.handleChangeEmail}
                    />
                    <TextField
                      name="hometown"
                      style={textFieldStyle}
                      floatingLabelText="家乡"
                      floatingLabelFixed
                    />
                    <TextField
                      name="signature"
                      floatingLabelText="个性签名"
                      floatingLabelFixed
                      fullWidth
                    />
                    <TextField
                      name="wechat"
                      style={textFieldStyle}
                      floatingLabelText="微信"
                      floatingLabelFixed
                    />
                    <TextField
                      name="weibo"
                      style={textFieldStyle}
                      floatingLabelText="微博"
                      floatingLabelFixed
                    />
                    <TextField
                      name="github"
                      style={textFieldStyle}
                      floatingLabelText="Github"
                      floatingLabelFixed
                    />
                    <TextField
                      name="linkedin"
                      style={textFieldStyle}
                      floatingLabelText="Linkedin"
                      floatingLabelFixed
                    />
                    <TextField
                      name="blog"
                      style={textFieldStyle}
                      floatingLabelText="Blog"
                      floatingLabelFixed
                    />
                </div>
            </div>
        )
    }
}

export default Step1
