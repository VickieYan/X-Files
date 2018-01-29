import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { uploadData } from '../../actions/userAction'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import Form from '../../components/Form/Form'
import styles from './index.scss'

@connect(
    state => state.user,
    { uploadData },
)
class Step1 extends Component {
    constructor(props) {
        super(props)
        // const { sex, isSingle, phoneNumber, hometown, signature, github, linkedin, twitter } = this.props
        this.state = {
            userinfo: [
                { type: 'select', label: '性别', name: 'sex', options: ['男', '女', '其他'], num:0 },
                { type: 'select', label: '单身', name: 'isSingle', options: ['是', '否'], num:0 },
                { type: 'text', label: '手机号码', name: 'phoneNumber' },
                { type: 'text', label: '家乡', name: 'hometown'},
                { type: 'text', label: '个性签名', name: 'signature'},
                { type: 'text', label: 'github', name: 'github'},
                { type: 'text', label: 'linkedin', name: 'linkedin'},
                { type: 'text', label: 'twitter', name: 'twitter' }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    

    handleChange(type, index, value) {
        const   { userinfo } = this.state
       
        switch (type) {
            case 'text':
                this.props.uploadData({ [userinfo[index].name]: value })
                break;
            case 'select':
                const _userinfo = userinfo.slice()
                const newUserinfo = userinfo.slice()
                newUserinfo[index].num = value
                this.setState({
                    userinfo: newUserinfo
                })
                this.props.uploadData({ [userinfo[index].name]: userinfo[index].options[value] })
                break;
            default:
                break;
        }
    }

    renderAvatar() {
        return(
          <div className={styles['img-wrapper']}>
              <ImageUpload />
          </div>
        )
    }

    renderInfo() {
        const   { userinfo } = this.state
        return(
          <div className={styles.form}>
              {
                  userinfo.map((item, index) => {
                      switch(item.type) {
                          case 'select':
                                return (
                                    <SelectField
                                      key={index}
                                      value={item.num}
                                      onChange={(ev,num) => {this.handleChange('select',index, num)}}
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
                                      floatingLabelText={item.label}
                                      onChange={(ev, value) => {this.handleChange('text', index, value)}}
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
