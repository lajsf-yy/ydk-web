import React, { useState, useCallback, useEffect } from 'react'
import './header.css'
import assets from 'assets'
import { openApp } from 'utils/helper'
import DownPop from 'components/DownPop'

const Header: PageComponent = props => {
  const [downShowPop,setDownShowPop] = useState(false)
  const [openAppParams,setOpenAppParam] = useState({})
    useEffect(() => {
        console.log('header get params - : ',props)
        setOpenAppParam(props.openAppParam)
    },[])
  const clickHandle = () => {
    let result = openApp(openAppParams)
    // setDownShowPop(false)
      console.log( - - 'Header - :',result)
    setDownShowPop(result)
  }
  const callback = (val:boolean) => {
    setDownShowPop(val)
  };
    useEffect(() => {
        // console.log('article - - downShowPop - : ',downShowPop)
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
        <img className="logo" src={assets.common.np_logo} alt="" />
        <span className="appName">营养计划</span>
      </div>
      <div className="rightPart">
        <span className="openBtn" onClick={clickHandle}>
          打开
        </span>
      </div>
    </div>
  )
}

export default Header
