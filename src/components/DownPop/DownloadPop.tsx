/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 21:30:14 
 * @Last Modified by:   mikey.jiufu 
 * @Last Modified time: 2020-03-22 21:30:14 
 */
import React, { useState, useEffect, useCallback } from 'react'
import './downloadPop.css'
/**
 *
 * @param {isShow}     组件是否显示
 * @param {callback}   关闭弹窗回调 
 *  @returns
 */
const DownloadPop: PageComponent = (props) => {
    const [showFailTips, setShowFailTips] = useState(false);   // 显示弹窗
    useEffect(() => {
        setShowFailTips(props.isShow)
    });
    const closePop = () => {
        setShowFailTips(false)
        props.callback(false)
    }
    const isIOS = () => {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    }
    return (
        <div className="DownloadPop-wrap">
            {showFailTips===false?'':<div onClick={closePop} className="open_app_fail_tips">
                {
                    !!isIOS() ? <div className="tips_main_ios"></div>
                        : <div className="tips_main"></div>
                }
            </div>}
        </div>
    )
}
export default DownloadPop
