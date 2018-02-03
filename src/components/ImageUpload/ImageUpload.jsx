import React, { Component } from 'react'
import ReactCoreImageUpload from 'react-core-image-upload'
import styles from './ImageUpload.scss'

class ImageUpload extends Component {
    static defaultProps = {
        text: '上传头像',
        className: styles.wrap,
        previewClassName: styles.preview,
        imgClassName: styles['preview-img'],
        btnClassName: styles['upload-btn'],
    }

    constructor(props) {
        super(props)
        // this.state = {
        //     src: this.props.avatar,
        // }
        this.imageuploaded = this.imageuploaded.bind(this)
        this.imageuploading = this.imageuploading.bind(this)
    }

    imageuploading() {
        const { fetchUserStart, num } = this.props
        fetchUserStart(num)
    }

    imageuploaded(res) {
        const { uploadData, inputOfFile, fetchUserSuccess } = this.props
        fetchUserSuccess()
        let name = 'avatar'
        switch (inputOfFile) {
            case 'IndexShowPhotograph':
                name = 'indexShowPhotograph'
                break
            case 'Photograph1':
                name = 'photograph1'
                break
            case 'Photograph2':
                name = 'photograph2'
                break
            case 'Photograph3':
                name = 'photograph3'
                break
            default:
                break
        }
        uploadData({ [name]: res.data })
    }

    render() {
        const {
            text,
            className,
            previewClassName,
            imgClassName,
            btnClassName,
            url,
            inputOfFile,
            fetchUser,
            num,
        } = this.props
        const loadingStyle = text === '上传头像' ? { width: '160px', height: '150px', borderRadius: '50%', marginLeft: '20px' } : {}
        const displayStyle = fetchUser === num  ? {} : { display: 'none' }
        return (
            <div className={className} >
                <div className={previewClassName}>
                    <div className={styles['loading-wrap']} style={{ ...loadingStyle, ...displayStyle }}>
                        <div className={styles.loading}>
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube" />
                                <div className="sk-cube2 sk-cube" />
                                <div className="sk-cube4 sk-cube" />
                                <div className="sk-cube3 sk-cube" />
                            </div>
                        </div>
                    </div>
                    <img
                      alt="preview"
                      src={this.props.avatar}
                      className={imgClassName}
                    />
                </div>
                <ReactCoreImageUpload
                //   crop
                  text={text}
                  className={btnClassName}
                  inputOfFile={inputOfFile} // 上传服务器对应表单name
                  url={url} // 服务器上传位置
                  imageUploaded={this.imageuploaded}
                  imageuploading={this.imageuploading}
                  cropBtn={{ ok: '确认', cancel: '取消' }}
                />
            </div>
        )
    }
}

export default ImageUpload
