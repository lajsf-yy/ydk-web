import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import ContentSource from '../../components/ContentSource'

const DemoPage: PageComponent = props => {
    // 数据json.stringify处理成字符串
    var sourceData ='[{"image":"https://cdn.yryz.com/lovelorn/image/default/201905/362935013883904.png?w=200&h=200"},{"image":"https://cdn.yryz.com/lovelorn/image/default/201905/362935013883904.png?w=200&h=250"},{ "text": "大米（Rice），是稻谷经清理、砻谷、碾米、成品整理等工序后制成的成品。 稻谷的胚与糊粉层中含有近64%的稻米营养和90%以上的人体所须的营养元素，是中国大部分地区人民的主要" }]'

    return (
      <div className="demo-wrap">

          <ContentSource sourceData={sourceData}/>

      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
