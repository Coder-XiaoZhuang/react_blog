import { useState } from 'react';
import headerStyles from '../static/style/components/Header.module.css';

import { Row, Col, Menu } from 'antd';
import { 
  HomeOutlined, 
  GithubOutlined, 
  SmileOutlined, 
  EditOutlined, 
  WechatOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import TypeIt from "typeit-react";

const Header = () => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('首页', 'home', <HomeOutlined />),
    getItem('项目', 'projects', <GithubOutlined />),
    getItem('生活', 'life', <SmileOutlined />),
    getItem('记录', 'record', <EditOutlined />),
    getItem('互动', 'chat', <WechatOutlined />),
    getItem('更多', 'more', <EllipsisOutlined />, [
      getItem('关于我', 'author')
    ]),
  ];
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className={headerStyles.header}>
      <Row type="flex" justify="center" align="middle">
          <Col xs={22} sm={22} md={10} lg={8} xl={8}>
              <span className={headerStyles.headerLogo}>好好</span>
              <span className={headerStyles.headerTxt}>
                <TypeIt getBeforeInit={(instance) => {
                    instance.type("专注前端, 坚持每天进步一点点").pause(750).delete()
                    return instance;
                  }}
                  options={{ loop: true }}>
                </TypeIt>
              </span>
          </Col>

          <Col xs={2} sm={2} md={14} lg={12} xl={10}>
              <Menu mode="horizontal" items={items} onClick={onClick} selectedKeys={[current]} style={{ backgroundColor: 'pink', color: '#fff'}}></Menu>
          </Col>
      </Row>
    </div>
  )
}

export default Header;