/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 21:29:57 
 * @Last Modified by:   mikey.jiufu 
 * @Last Modified time: 2020-03-22 21:29:57 
 */
import React, { useState, useCallback, useEffect } from 'react'
import './header.css'
import assets from 'assets'
import { openApp } from 'utils/helper'
import DownPop from 'components/DownPop'
/**
 *
 * @param {icon}              顶部icon图 可选参数
 * @param {title}             标题
 * @param {rightBtnStyle}     右边按钮样式 可选参数
 * @param {openAppParam}      打开对应App页面参数
 * @param {handleData}        在微信中是否显示弹窗弹层
 *  @returns
 */
const Header: PageComponent = props => {
  const [downShowPop,setDownShowPop] = useState(false)
  const [openAppParams,setOpenAppParam] = useState({})
    useEffect(() => {
        setOpenAppParam(props.openAppParam)

    },[])
  const clickHandle = () => {
    let result = openApp(openAppParams)
    setDownShowPop(result)
  }
  const callback = (val:boolean) => {
    setDownShowPop(val)
  };
    useEffect(() => {
        if (downShowPop) {
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflow = 'auto'
        }
    },[downShowPop])
  return (
    <div className="header-wrap">
        {downShowPop === true ? <DownPop isShow={downShowPop} callback={callback}></DownPop> : ''}
      <div className="leftName">
        <img className="logo" src={!!props.icon ? props.icon : assets.common.np_logo} alt="" />
        <span className="appName">{!!props.title ? props.title : '营养计划'}</span>
      </div>
      <div className="rightPart">
          {
             props && props.rightBtnStyle ?
              <span style={props && props.rightBtnStyle ? props.rightBtnStyle : ''}
              className="openBtn" onClick={clickHandle}>打开</span>
              : <span className="openBtn" onClick={clickHandle}>打开</span>
          }
      </div>
    </div>
  )
}

export default Header
