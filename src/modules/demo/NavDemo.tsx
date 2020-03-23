import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import Nav from '../../components/Nav';
import yryz from '../../utils/reactNativeMessage';

const DemoPage: PageComponent = props => {

    // 右边按钮点击事件
    const confirmInvoice = () => {

    }

    // 右边显示
    const headRight = () => {
        return (
            <div className="head-save" onClick={confirmInvoice} style={{color:'#3FCC7E',fontSize:'0.28rem'}}>
                确定
            </div>
        )
    }
    /**
     * @description   分享参数
     * @param {type}             分享类型默认 auto
     * @param {content}          分享内容
     * @param {url}              分享打开连接 
     * @param {title}            分享标题
     * @param {imgUrl}           分享icon
     *  @returns
     */
    const [shareParam,setShareParam] = useState({
            type: 'auto',
            content: '',
            url: '',
            title : '',
            imgUrl: ''
    })
    
    // 返回App页面
    const onBack = () => {
        yryz.goBack()
    }
    /**
     * onBack: 有参数返回App
     *         没有返回浏览器上一级页面
     *  
     * shareRight: webview内使用，普通web页不用 
     */
    return (
      <div className="demo-wrap">
          <div className="line-tip">默认</div> 
          {/* <Nav title="发票信息" right={headRight()}></Nav> */}  
          {/* <div className="line-tip">右边为分享</div> */}  
          {/* App内嵌入webview onBack 属性返回App原生页面 shareRight={shareParam}*/}  
          <div className="line-tip">分享头</div>
          <Nav title="发票信息" shareRight={shareParam}></Nav>
          {/* <Nav onBack={onBack} title="发票信息1" right={headRight()}></Nav> */}
      </div>
    )
}
export default DemoPage
