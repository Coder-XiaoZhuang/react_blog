import { Divider } from 'antd';
import columnStyles from "../static/style/components/Column.module.css";

const Column = () => {
  return (
    <div className={ `comm-box ${columnStyles.columnDiv}` }>
      <Divider style={{ color: 'pink'  }}>
        TA的专栏
      </Divider>
      <div>
        目前无数据
      </div>
    </div>
  )
}

export default Column;