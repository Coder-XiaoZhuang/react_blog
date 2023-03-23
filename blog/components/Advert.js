import { useState } from 'react';
import { Divider } from 'antd';
import advertStyles from "../static/style/components/Advert.module.css";

const Advert = () => {
  let [ state, setState ] = useState({
    currentTime: '',
  });
  function checkTime(val) {
    return val < 10 ? `0${val}` : val;
	}
  global.setInterval(function() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let second = date.getSeconds();
		let currentTime = year + "年" + month + "月" + day + "日  " + checkTime(hour) + ":" + checkTime(minutes) + ":" + checkTime(second);
    setState({ currentTime });
  }, 1000);

  return (
    <div className={ `comm-box ${advertStyles.advertDiv}` }>
      <Divider style={{ color: 'pink'  }}>
        感恩相遇
      </Divider>
      <div className={ advertStyles.advertContent }>
        <div className={ advertStyles.advertIP }>
          您的IP：<span style={{ color: 'pink' }}>127.0.0.1(等后端)</span>
        </div>
        <div className={ advertStyles.advertAddress }>
          您的地址：<span style={{ color: 'pink' }}>广东省 深圳市(等后端)</span>
        </div>
        <div className={ advertStyles.advertNotice }>
          您好，现在是：<span style={{ color: 'pink' }}>{ state.currentTime }</span>
          <div style={{ marginTop: '10px' }}>感恩相遇，祝您生活愉快。</div>
        </div>
      </div>
    </div>
  );
}

export default Advert;