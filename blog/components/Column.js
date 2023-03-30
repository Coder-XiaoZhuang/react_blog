import { useState } from 'react';
import { Divider } from 'antd';
import columnStyles from "../static/style/components/Column.module.css";

const Column = () => {
  let [state, setState] = useState({
    columnArr: [
      { columnImg: '', columnTitle: 'vue的学习', columnNum: 9 },
      { columnImg: '', columnTitle: 'react的学习', columnNum: 9 },
      { columnImg: '', columnTitle: 'js的学习', columnNum: 9 },
      { columnImg: '', columnTitle: 'ts的学习', columnNum: 9 },
      { columnImg: '', columnTitle: 'node的学习', columnNum: 9 },
    ]
  });
  return (
    <div className={ `comm-box ${columnStyles.columnDiv}` }>
      <Divider style={{ color: 'pink'  }}>
        TA的专栏
      </Divider>
      <div>
        <div>
          <ul>
            <li>
              <a href="#">
                <div></div>
                <img src="" alt="" />
                <span></span>
              </a>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Column;