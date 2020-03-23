import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import ScoreStar from '../../components/ScoreStar'

const DemoPage: PageComponent = props => {
    /**
     *  size: small , middle , large （选填）
     *
     *  defaultValue: 显示星星的值
     *
     */
    return (
      <div className="demo-wrap">
          <div className="line-tip">小号</div>
          <ScoreStar size="small"  defaultValue={3}/>
          <div className="line-tip">中号</div>
          <ScoreStar size="middle"  defaultValue={3}/>
          <div className="line-tip">大号</div>
          <ScoreStar size="large" defaultValue={3}/>
          <div className="line-tip">默认</div>
          <ScoreStar defaultValue={2}/>
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
