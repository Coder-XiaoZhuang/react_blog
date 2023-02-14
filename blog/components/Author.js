import { useState } from 'react';
import { Avatar, Divider, Tooltip } from 'antd';
import { 
    GithubOutlined,
    QqOutlined,
    WechatOutlined
  } from '@ant-design/icons';
import authorStyles from '../static/style/components/Author.module.css';
import qqUrl from "../images/qq.png";
import wechatUrl from "../images/wechat.jpg";

const Author = () => {
    let [state, setState] = useState({
        isShowQq: false,
        isShowWechat: false
    });

    return (
        <div className={`comm-box ${authorStyles.authorDiv}`}>
            <div> <Avatar size={100} src="https://i.postimg.cc/qRBXrnz4/image.jpg"  /></div>
            <div className={ authorStyles.authorIntroduction }>
                <div>
                    <div className={ authorStyles.authorName }>好好</div>
                    <div className={ authorStyles.authorSign }>勇敢，迎难而上。</div>
                </div>
                <Divider style={{ color: 'pink'  }}>社交账号</Divider>
                <Tooltip title="Go to my github">
                    <a href='https://github.com/Coder-XiaoZhuang' target='_blank'>
                        <Avatar size={28} icon={ <GithubOutlined /> } className={ authorStyles.account }  />
                    </a>
                </Tooltip>
                <Avatar size={28} icon={ <QqOutlined /> }  className={ authorStyles.account }
                    onMouseEnter={ () => setState({ isShowQq: true, isShowWechat: false }) }
                    onMouseLeave={ () => setState({ isShowQq: false, isShowWechat: false }) }
                ></Avatar>
                <Avatar size={28} icon={ <WechatOutlined /> }  className={ authorStyles.account }
                    onMouseEnter={ () => setState({ isShowQq: false, isShowWechat: true }) }
                    onMouseLeave={ () => setState({ isShowQq: false, isShowWechat: false }) }
                ></Avatar>
                {
                    state.isShowQq ? <div className='authorQq'>  
                        <div>
                            <img src={ qqUrl } alt="好好的QQ"/>
                        </div> 
                    </div> : null  
                }
                {
                    state.isShowWechat ? <div className='authorWechat'>     
                    <div>   
                        <img src={ wechatUrl } alt="好好的微信"/> 
                    </div> 
                </div> : null
                }
            </div> 
        </div>
    );

}

export default Author