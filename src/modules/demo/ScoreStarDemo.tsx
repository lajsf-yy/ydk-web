import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import ScoreStar from '../../components/ScoreStar'

const DemoPage: PageComponent = props => {

    return (
      <div className="demo-wrap">

          <ScoreStar defaultValue={3}/>

      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
