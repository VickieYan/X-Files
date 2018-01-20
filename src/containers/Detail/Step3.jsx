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
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            memorabilias: [...this.state.memorabilias, ''],
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.memorabilias.map((item, index) => (<Memorabilia key={index} />))
                    }
                </div>
                <div className={styles.addBtn}>
                    <FloatingActionButton
                      onClick={this.handleClick}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

export default Step3
