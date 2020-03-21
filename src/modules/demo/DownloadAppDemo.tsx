import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import  DownPop  from '../../components/DownPop'
import Footer from '../../components/Footer'
import {openApp} from "../../utils/helper"
import Header from '../../components/Header'

const DemoPage: PageComponent = props => {
    // 显示微信引导打开浏览器
    const [downShowPop,setDownShowPop] = useState(false)
    // 传到头部组件函数
    const showDownPopHandle = (isShow:boolean) => {
        setDownShowPop(isShow)
    }
    // 微信引导打开浏览器
    const callback = (val:boolean) => {
       setDownShowPop(val)
    }
    /**
     *  web 页面打开app 点击方法
     *  openAppParams：
     *
        单个参数:
            var openParam = {
				passprops: 'kid',        // 传到App的key
				id: kid,                 // 传到App的值
				router: 'LessionDetail'  // 路由:要跳转的App页面
			}
        多个参数:
            let params = {
                a: 'first param',
                b: 'second param',
                c: 'third param',
            }
            let mutilParams = JSON.stringify(params)
            var openParam = {
				params: mutilParams,     // 传给App的数据
				router: 'LessionDetail'  // 路由:要跳转的App页面
			}
     */
    var openParam = {
        passprops: 'kid',        // 传到App的key
        id: 123,                 // 传到App的值
        router: 'LessionDetail'  // 路由:要跳转的App页面
    }
    // 页面点击事件打开App
    const clickHandle = (openParam:any) => {
        const result = openApp(openParam)
        if (result) {
            setDownShowPop(true)
        } else {
            setDownShowPop(false)
        }
    }
    return (
      <div className="demo-wrap">
          <Header openAppParam={openParam} handleData={showDownPopHandle} />
          <DownPop isShow={downShowPop} callback={callback}> </DownPop>
          <Footer onClick={clickHandle}/>

      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
