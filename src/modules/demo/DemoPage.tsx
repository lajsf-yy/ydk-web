import React, { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'
import './demo.css'
const DemoPage: PageComponent = props => {
  const [result, setSesult] = useState({})
  useEffect(() => {

  }, [])
  return (
    <div className="demo-wrap">
      <div className="title">demo</div>

    </div>
  )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
