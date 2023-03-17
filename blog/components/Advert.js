import { Divider } from 'antd';
import advertStyles from "../static/style/components/Advert.module.css";

const Advert = () => {
  return (
    <div className={ `comm-box ${advertStyles.advertDiv}` }>
      <Divider style={{ color: 'pink'  }}>
        感恩相遇
      </Divider>
      <div className={ advertStyles.advertContent }>
        <div className={ advertStyles.advertIP }>
          您的IP：<span style={{ color: 'pink' }}>127.0.0.1</span>
        </div>
        <div className={ advertStyles.advertAddress }>
          您的地址：<span style={{ color: 'pink' }}>广东省 深圳市</span>
        </div>
        <div className={ advertStyles.advertNotice }>
          您好，现在是：<span>2023/2/15 14:16:18</span>。 感恩相遇，祝您生活愉快。
        </div>
      </div>
    </div>
  );
}

export default Advert;