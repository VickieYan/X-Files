import React, { Component } from 'react'
import ReactCoreImageUpload from 'react-core-image-upload'
import styles from './Upload.scss'

class Upload extends Component {
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
            <div className={styles.wrap}>
                <div className={styles.preview}>
                    <img
                        alt="photo"
                        src={this.state.src}
                        className={styles['preview-img']}
                    />
                </div>
                <ReactCoreImageUpload
                    crop
                    resize="local"
                    text="上传您的照片"
                    className={styles['upload-photo-btn']}
                    inputOfFile="avatar" // 上传服务器对应表单name
                    url="http://wsmis053:6141/user/testUpdate" // 服务器上传位置
                    imageUploaded={this.imageuploaded}
                    cropBtn={{ ok: '确认', cancel: '取消' }}
                />
            </div>
        )
    }
}

export default Upload
