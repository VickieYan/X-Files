import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import styles from './EditCard.scss'

class EditCard extends Component {
    renderButton() {
        return (
            <div className={styles['edit-button-wrap']}>
                <IconButton tooltip="Edit" onClick={this.props.onClick}>
                    <EditorModeEdit />
                </IconButton>
            </div>
        )
    }
    render() {
        const { title, isEditable } = this.props
        return (
            <div className={styles.wrap}>
                <div className={styles.head}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                {isEditable && this.renderButton()}
                {this.props.children}
            </div>
        )
    }
}

export default EditCard
