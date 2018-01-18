import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
// import ActionFavorite from 'material-ui/svg-icons/action/favorite'
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import styles from './index.scss'

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
      const phoneNumber = event.target.value
      const flag = /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phoneNumber)
      if (!flag) {
        this.setState({
          phoneErrorText: '您输入的手机号码有误',
        })
      } else {
        this.setState({
          phoneErrorText: null,
        })
      }
    }

    handleChangeEmail(event) {
      const email = event.target.value
      const flag = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
      if (!flag) {
        this.setState({
          emailErrorText: '您输入的邮箱有误',
        })
      } else {
        this.setState({
          emailErrorText: null,
        })
      }
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
                      floatingLabelText="性别"
                      value={this.state.sexValue}
                      onChange={this.handleChangeSex}
                    >
                        <MenuItem value={1} primaryText="男" />
                        <MenuItem value={2} primaryText="女" />
                    </SelectField>
                    <SelectField
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
                      onBlur={this.handleChangePhone}
                    />
                    <TextField
                      name="phone"
                      floatingLabelText="邮箱"
                      floatingLabelFixed
                      errorText={this.state.emailErrorText}
                      onBlur={this.handleChangeEmail}
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
