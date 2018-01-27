import React, { Component } from 'react'
import ReactCoreImageUpload from 'react-core-image-upload'
import styles from './ImageUpload.scss'

class ImageUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
        }
        this.imageuploaded = this.imageuploaded.bind(this)
    }

    imageuploaded(res) {
        if (res.errcode === 0) {
            this.setState({
                src: res.data.src,
            })
        }
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <img
                      alt="avatar"
                      src={this.state.src}
                      className={styles['avatar-img']}
                    />
                </div>
                <ReactCoreImageUpload
                  crop
                  text="上传头像"
                  className={styles['upload-btn']}
                  inputOfFile="avatar" // 上传服务器对应表单name
                  url="http://wsmis053:6141/user/testUpdate" // 服务器上传位置
                  imageUploaded={this.imageuploaded}
                  cropBtn={{ ok: '确认', cancel: '取消' }}
                />
            </div>
      )
    }
}

export default ImageUpload
