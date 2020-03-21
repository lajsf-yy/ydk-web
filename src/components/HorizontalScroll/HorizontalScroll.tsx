import React, { useState, useEffect } from 'react'
import '../../styles/swiper.min.css'
import './scrollgoods.css'
import Swiper from 'react-id-swiper'

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
