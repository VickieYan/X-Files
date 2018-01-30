import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { AppBar } from '../../components/'
import Main from './Main'
import About from './About'
import Hobby from './Hobby'
import Skill from './Skill'
import Work from './Work'
import styles from './Profile.scss'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'main',
            group: [{
                name: 'main',
                component: Main,
            }, {
                name: 'about',
                component: About,
            }, {
                name: 'hobby',
                component: Hobby,
            }, {
                name: 'skill',
                component: Skill,
            }, {
                name: 'work',
                component: Work,
            }],
            data: {
                _id: '5a67fffbf4a61132bcc29f0f',
                shortName: 'bl4b',
                Groups: [
                    '* ORG CN SH NESC MIS US D WWW (305.433\\#2)',
                    '* GP team mis nesc cnsh neweggecdeveloper www',
                    '* GP team mis nesc cnsh neweggec developer',
                    '* GP team mis nesc cnsh neweggec',
                ],
                skills: [
                    'C++',
                    'JAVA',
                    'HTML',
                    'Linux',
                    'Python',
                ],
                tags: [
                    '爱学习',
                    '爱工作',
                    '爱自由',
                ],
                hobbies: [
                    '琴',
                    '棋',
                    '书',
                    '画',
                    '篮球',
                ],
                country: '中国',
                visit: 0,
                contributes: [
                    {
                        _id: '5a6841acb439a21bc08dcd34',
                        duty: '啥也没干，就是中了500万',
                        endTime: '2018-01-30T03:39:39.352Z',
                        startTime: '2018-01-24T03:39:39.352Z',
                    },
                    {
                        _id: '5a6841acb439a21bc08dcd33',
                        duty: '真的啥也没干',
                        endTime: '2018-01-24T03:39:39.352Z',
                        startTime: '2018-01-14T03:39:39.352Z',
                    },
                ],
                isWork: true,
                meta: {
                    updateAt: '2018-01-24T03:39:39.352Z',
                    createAt: '2018-01-24T03:39:39.352Z',
                },
                role: 0,
                photograph: 'uploads/photograph-1516765200748.jpg',
                Avatar: 'http://10.16.75.10:9043/common/v1/domain/user/bl4b/avatar',
                __v: 0,
                hometown: '内蒙古 呼和浩特',
                sex: '',
                hireDate: null,
                job: 'FONT-END ENGINEER',
                phoneNumber: '17761237141',
                cName: '李巴特儿',
                Title: 'Eng,Software,WWW',
                TelephoneNumber: '818641099',
                Department: 'CN SH NESC MIS',
                Company: 'NESC',
                EmployeeID: '17860220',
                Email: 'Bill.B.Li@newegg.com',
                DisplayName: 'Bill.B.Li (g-mis.cnsh01.Newegg) 41099',
                FullName: 'Bill.B.Li',
                deparent: 'www',
                eName: '',
                isSingle: true,
            },
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name) {
        this.setState({ currentPage: name })
    }

    render() {
        const { currentPage, data, group } = this.state
        return (
            <div>
                <AppBar {...this.props} />
                <div className={styles.wrap}>
                    <CSSTransitionGroup
                      transitionName="fade"
                      transitionEnterTimeout={200}
                      transitionLeaveTimeout={200}
                    >
                        {group.map((item, index) => {
                            const Specifystory = item.component
                            return currentPage === item.name &&
                                <Specifystory
                                  key={index}
                                  onClick={this.handleClick}
                                  data={data}
                                />
                        })}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Profile
