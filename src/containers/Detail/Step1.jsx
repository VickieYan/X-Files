import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import styles from './index.scss'
import validator from '../../scripts/validator'

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
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleChangeSex(event, index, sexValue) {
      this.setState({ sexValue })
    }

    handleChangeSingle(event, index, singleValue) {
      this.setState({ singleValue })
    }

    handleBlur(event) {
      const { target } = event
      const text = target.value.trim()
      const { pattern } = validator[target.name]
      const { errorMsg } = validator[target.name]
      const value = pattern.test(text) ? null : errorMsg
      const statusType = {
        phone: 'phoneErrorText',
        email: 'emailErrorText',
      }[target.name]
      this.setState({ [statusType]: value })
    }

    render() {
        return (
            <div>
                <ImageUpload />
                <div className={styles.form}>
                    <TextField
                      name="cName"
                      floatingLabelText="姓名（中文）"
                      floatingLabelFixed
                    />
                    <TextField
                      name="eName"
                      floatingLabelText="姓名（英文）"
                      floatingLabelFixed
                    />
                    <SelectField
                      name="sex"
                      floatingLabelText="性别"
                      value={this.state.sexValue}
                      onChange={this.handleChangeSex}
                    >
                        <MenuItem value={1} primaryText="男" />
                        <MenuItem value={2} primaryText="女" />
                    </SelectField>
                    <SelectField
                      name="isSingle"
                      floatingLabelText="单身"
                      value={this.state.singleValue}
                      onChange={this.handleChangeSingle}
                    >
                        <MenuItem value={1} primaryText="是" />
                        <MenuItem value={2} primaryText="否" />
                    </SelectField>
                    <TextField
                      name="department"
                      floatingLabelText="部门"
                      floatingLabelFixed
                    />
                    <TextField
                      name="job"
                      floatingLabelText="岗位"
                      floatingLabelFixed
                    />
                    <TextField
                      name="phone"
                      floatingLabelText="手机号码"
                      floatingLabelFixed
                      errorText={this.state.phoneErrorText}
                      onBlur={this.handleBlur}
                    />
                    <TextField
                      name="email"
                      floatingLabelText="邮箱"
                      floatingLabelFixed
                      errorText={this.state.emailErrorText}
                      onBlur={this.handleBlur}
                    />
                    <TextField
                      name="hometown"
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
                      floatingLabelText="微信"
                      floatingLabelFixed
                    />
                    <TextField
                      name="weibo"
                      floatingLabelText="微博"
                      floatingLabelFixed
                    />
                    <TextField
                      name="github"
                      floatingLabelText="Github"
                      floatingLabelFixed
                    />
                    <TextField
                      name="linkedin"
                      floatingLabelText="Linkedin"
                      floatingLabelFixed
                    />
                    <TextField
                      name="blog"
                      floatingLabelText="Blog"
                      floatingLabelFixed
                    />
                </div>
            </div>
        )
    }
}

export default Step1
