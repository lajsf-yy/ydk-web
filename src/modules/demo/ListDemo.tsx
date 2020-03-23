import React, { useState, useEffect, useCallback } from 'react'
import './list.css'
enum PAGETYPE {
    OPENAPP = 'OPENAPP',
    CONTENTSOURCE = 'CONTENTSOURCE',
    ADDRESSPICKER = 'ADDRESSPICKER',
    NAV = 'NAV',
    MESSAGE = 'MESSAGE',
    SCORESTAR = 'SCORESTAR',
    COMMENT = 'COMMENT',
    COMMENTOLD = 'COMMENTOLD',
    HORIZONTALSCROLL = 'HORIZONTALSCROLL',
}
const DemoPage: PageComponent = props => {
    const goToPage = (type:string) => {
      switch (type) {
          case PAGETYPE.OPENAPP:
              props.history.push('/openApp/demo')
              break;
          case PAGETYPE.CONTENTSOURCE:
              props.history.push('/contentSource/demo')
              break;
          case PAGETYPE.ADDRESSPICKER:
              props.history.push('/addressPicker/demo')
              break;
          case PAGETYPE.NAV:
              props.history.push('/nav/demo')
              break;
          case PAGETYPE.MESSAGE:
              props.history.push('/message/demo')
              break;
          case PAGETYPE.SCORESTAR:
              props.history.push('/scoreStar/demo')
              break;
          case PAGETYPE.COMMENT:
              props.history.push('/comment/demo')
              break;
          case PAGETYPE.COMMENTOLD:
              props.history.push('/commentOld/demo')
              break;
          case PAGETYPE.HORIZONTALSCROLL:
              props.history.push('/horizontalScroll/demo')
              break;
          default:
              break;
      }
    }
    return (
      <div className="demo-wrap">
          <div className="list">
              <div className="list-item-" onClick={() => goToPage('ADDRESSPICKER')}>地址选择器</div>
              <div className="list-item-" onClick={() => goToPage('COMMENT')}>带回复评论列表</div>
              <div className="list-item-" onClick={() => goToPage('COMMENTOLD')}>不带回复评论列表</div>
              <div className="list-item-" onClick={() => goToPage('CONTENTSOURCE')}>图文并茂组件</div>
              <div className="list-item-" onClick={() => goToPage('OPENAPP')}>下载App组件</div>
              <div className="list-item-" onClick={() => goToPage('MESSAGE')}>空数据提示组件</div>
              <div className="list-item-" onClick={() => goToPage('NAV')}>头部导航栏</div>
              <div className="list-item-" onClick={() => goToPage('HORIZONTALSCROLL')}>水平滚动</div>
              <div className="list-item-" onClick={() => goToPage('SCORESTAR')}>评分组件</div>
          </div>
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
