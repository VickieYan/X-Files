import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Memorabilia } from '../../components/'
import styles from './Detail.scss'

class Step3 extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleAdd() {
        this.props.onUploadData({
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
            this.props.onUploadData({ contributes })
        }
    }

    render() {
        const { contributes, onUploadData } = this.props
        return (
            <div>
                <div>
                    <div className={styles['memorabilia-example']}>
                        <h1 className={styles['memorabilia-example-title']}>工作贡献</h1>
                        ٩̋(๑˃́ꇴ˂̀๑)举个栗子<br /><br />
                        <span className={styles['memorabilia-example-name']}>开始时间：</span><br />2017-3-1<br /><br />
                        <span className={styles['memorabilia-example-name']}>结束时间：</span><br />2017-11-1<br /><br />
                        <span className={styles['memorabilia-example-name']}>描述：</span><br />参加Higo项目开发。项目初期，从完成一个模块的功能开发到整个框架的设计者和代码贡献者。<br />通过这个项目的锻炼，成为一名掌握从前端到后端技术，具有全栈能力的工程师。
                    </div>
                    {contributes.map((item, index) => (
                        <Memorabilia
                          key={index}
                          isDeletable
                          index={index}
                          startTime={item.startTime}
                          endTime={item.endTime}
                          contributes={contributes}
                          startTime={item.startTime}
                          endTime={item.endTime}
                          text={item.duty}
                          onUploadData={onUploadData}
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
