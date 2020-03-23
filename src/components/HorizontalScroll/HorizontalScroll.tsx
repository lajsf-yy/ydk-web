/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 21:29:42 
 * @Last Modified by: mikey.jiufu
 * @Last Modified time: 2020-03-22 22:06:22
 */
import React, { useState, useEffect } from 'react'
import '../../styles/swiper.min.css'
import './scrollgoods.css'
import Swiper from 'react-id-swiper'
/**
 *
 * @param {slidesPerView}     首屏看到的item条目
 * @param {spaceBetween}      两个条目之间的距离
 * @param {domList}           要渲染显示的dom列表
 *  @returns
 */
const ScrollGoodsModule: PageComponent = props => {
  // 横向滚动 swiper 配置
  const params = {
    slidesPerView: props.slidesPerView || 2.2,
    spaceBetween: props.spaceBetween || 30,
    freeMode: true,
  }
  const [listHot, setListHot] = useState([])
  return (
    <div className="scrollgoods-wrap">
      <div className="good-list">
          {<Swiper {...params}>
              {props.domList}
          </Swiper>}
      </div>
    </div>
  )
}

ScrollGoodsModule.options = { disableHeader: false, wrapperClassName: '' }
export default ScrollGoodsModule
