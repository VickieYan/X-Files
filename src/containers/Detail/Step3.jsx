import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { connect } from 'react-redux'
import { uploadData } from '../../actions/userAction'
import { Memorabilia } from '../../components/'
import styles from './Detail.scss'

@connect(
    state => state.user,
    { uploadData },
)
class Step3 extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleAdd() {
        this.props.uploadData({
            contributes: [...this.props.contributes,
                {
                    startTime: '',
                    endTime: '',
                    duty: '',
                },
            ],
        })
    }

    handleDelete(index) {
        return () => {
            const contributes = this.props.contributes.slice()
            contributes.splice(index, 1)
            this.props.uploadData({ contributes })
        }
    }

    render() {
        const { contributes } = this.props
        return (
            <div>
                <div>
                    {contributes.map((item, index) => (
                        <Memorabilia
                          key={index}
                          isDeletable
                          index={index}
                          onDelete={this.handleDelete(index)}
                        />
                    ))}
                </div>
                <div className={styles.addBtn}>
                    <FloatingActionButton
                      onClick={this.handleAdd}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

export default Step3
