import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Memorabilia from '../../components/Memorabilia/Memorabilia'
import styles from './index.scss'

class Step3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memorabilias: [''],
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleAdd() {
        this.setState({
            memorabilias: [...this.state.memorabilias, ''],
        })
    }

    handleDelete(index) {
        return () => {
            console.log('test')
            const memorabilias = this.state.memorabilias.slice()
            memorabilias.splice(index, 1)
            this.setState({ memorabilias })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.memorabilias.map((item, index) => (<Memorabilia key={index} isDeletable onDelete={this.handleDelete(index)} />))}
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
