import React, { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'
import './demo.css'
import  DownPop  from '../../components/DownPop'
import Footer from '../../components/Footer'

const DemoPage: PageComponent = props => {
    const [downShowPop,setDownShowPop] = useState(false)        //   显示引导弹窗
    const callback = (val:boolean) => {
        setDownShowPop(val)
    }
    return (
      <div className="demo-wrap">

           <DownPop isShow={downShowPop} callback={callback}></DownPop>


          <Footer />


      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
