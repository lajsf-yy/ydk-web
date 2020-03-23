/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 21:30:07 
 * @Last Modified by:   mikey.jiufu 
 * @Last Modified time: 2020-03-22 21:30:07 
 */
import React from 'react'
import './footer.css'
/**
 *
 * @param {style}     底部按钮样式
 *  @returns
 */
const Footer: PageComponent = (props) => {
  return (
    <div className="footer-wrap">
      {props.style ?<div className="btnOpen" style={props.style || ''}>打开App</div>
       : <div className="btnOpen">
           打开App
         </div>
      }
    </div>
  )
}
export default Footer
