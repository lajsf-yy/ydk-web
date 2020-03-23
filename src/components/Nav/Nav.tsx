/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 20:52:52 
 * @Last Modified by: jiufu
 * @Last Modified time: 2020-03-23 15:30:32
 */
import React from 'react'
import { Icon } from 'antd-mobile'
import './nav.css'
import yryz from '../../utils/reactNativeMessage';
import { useHistory } from 'react-router'
/**
 *
 * @param {title}    导航栏中间文字
 * @param {right}    导航栏右边显示模块
 * @param {style}    导航栏样式  
 * @param {onBack() => void}  导航栏左边返回事件  
 *                            有:   返回属性返回App原生页面  
 *                            没有: 返回浏览器
 * @param {shareRight}        webview 内使用，参数对象，可选
 * @returns                                                                                         
 */
const Nav: React.FC<{ title: string; right?: any; style?: React.CSSProperties; onBack?: () => void; shareRight?: any }> = props => {
  const history = useHistory()
  const handleBack = () => {
    if (props.onBack) return props.onBack()
    history.goBack()
  }
  const shareInvoice = () => {
    props.shareRight && yryz.share(props.shareRight)
  }
  // 分享按钮
  const shareRight = () => {
    return (
            <img onClick={shareInvoice} className="shareBtn" src={require('./image/share-icon.png')} alt=""/>
    )
  }

  return (
    <div className="nav" style={props.style}>
      <div className="left" onClick={handleBack}>
        <Icon type="left" size="lg" />
      </div>
      <div className="title">{props.title}</div>
      <div className="right">{props.right ? props.right : props.shareRight ?
        shareRight()  
        : null}</div>
    </div>
  )
}
export default Nav
