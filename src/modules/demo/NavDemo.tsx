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
            <div className="head-save" onClick={confirmInvoice} style={{ color: true ? '#3FCC7E' : '#999' }}>
                确定
            </div>
        )
    }

    // 返回App页面
    const onBack = () => {
        yryz.goBack()
    }
    /**
     *  有   onBack 参数返回App
     *  没有  onBack 返回浏览器上一级页面
     *
     */
    return (
      <div className="demo-wrap">
          <Nav onBack={onBack} title="发票信息" right={headRight()}></Nav>
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
