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
    }

    imageuploaded(res) {
        const { uploadData, inputOfFile } = this.props
        // uploadData({ avatar: `http://wsmis053:6141/${res.data}` })
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
        } = this.props
        return (
            <div className={className}>
                <div className={previewClassName}>
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
                  cropBtn={{ ok: '确认', cancel: '取消' }}
                />
            </div>
        )
    }
}

export default ImageUpload
