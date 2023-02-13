import { Avatar, Divider } from 'antd';
import { 
    GithubOutlined,
    QqOutlined,
    WechatOutlined
  } from '@ant-design/icons';
import authorStyles from '../static/style/components/Author.module.css';

const Author = () => {

    return (
        <div className={`comm-box ${authorStyles.authorDiv}`}>
            <div> <Avatar size={100} src="https://i.postimg.cc/qRBXrnz4/image.jpg"  /></div>
            <div className={ authorStyles.authorIntroduction }>
                <div>
                    <div className={ authorStyles.authorName }>好好</div>
                    <div className={ authorStyles.authorSign }>勇敢，迎难而上。</div>
                </div>
                <Divider style={{ color: 'pink'  }}>社交账号</Divider>
                <Avatar size={28} icon={ <GithubOutlined /> } className={ authorStyles.account }  />
                <Avatar size={28} icon={ <QqOutlined /> }  className={ authorStyles.account } />
                <Avatar size={28} icon={ <WechatOutlined /> }  className={ authorStyles.account }  />
            </div> 
        </div>
    );

}

export default Author