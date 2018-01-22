import React, { Component } from 'react'
// import Masonry from 'react-masonry-component'
import AppBar from '../../components/AppBar/AppBar'
import Fiche from '../../components/Fiche/Fiche'
import styles from './Home.scss'

class Home extends Component {
    render() {
        const info = [{
            cName:'刘昊然',
            department:'三大不溜',
            url:'http://img2.selfimg.com.cn/GQgalleryLowerrightWatermarkB/2016/05/18/1463582600_9GWIHY.jpg',
            signature:'我在等一个人，在等我的永恒，告诉我爱不单行别害怕。'
        },{
            cName:'古川雄辉',
            department:'Big Data',
            url:'http://img31.mtime.cn/pi/2014/12/30/160807.63893246_369X369X4.jpg',
            signature:'两个人分手后复合的概率是82%，但复合后能一直走到最后的只有3%，那97%再分手的理由其实都跟第一次一样。'
        },{
            cName:'福士苍汰',
            department:'三大不溜',
            url:'http://i.shangc.net/2017/0107/20170107013417428.jpg',
            signature:'一旦有了梦想，钱就成了通往幸福的桥梁。所以，一定要有梦想啊，有了梦想，钱就有用了。'
        },{
            cName:'吴青峰',
            department:'SSL',
            url:'http://images.china.cn/attachement/jpg/site1000/20151020/c03fd55670b2178fe74537.jpg',
            signature:'痛苦的时候，能坦然流露痛苦的表情，是很幸福的人；紧张的时候，能直接显露紧张的姿势，是很幸福的人。'
        }]
        return (
            <div>
                <AppBar />
                <div className={styles.main}>
                    {/* <Masonry
                        className={'my-gallery-class'} // default ''
                        options={masonryOptions} // default  {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {
                            info.map((item,index) => (
                                <Fiche 
                                    key={index}
                                    data={item}
                                />
                            ))
                        }
                    </Masonry> */}
                    {
                        info.map((item,index) => (
                            <Fiche 
                                key={index}
                                data={item}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Home
