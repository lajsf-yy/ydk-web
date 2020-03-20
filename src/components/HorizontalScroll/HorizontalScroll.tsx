import React, { useState, useEffect } from 'react'
import '../../styles/swiper.min.css'
import './scrollgoods.css'
import Swiper from 'react-id-swiper'

const ScrollGoodsModule: PageComponent = props => {
  // 横向滚动 swiper 配置
  const params = {
    slidesPerView: 2.2,
    spaceBetween: 30,
    freeMode: true,
  }
  const [listHot, setListHot] = useState([])
  useEffect(() => {
    if (props.dataList.length > 0) {
      setListHot(props.dataList)
    }
  }, [])
  return (
    <div className="scrollgoods-wrap">
      <div className="good-list">
        {listHot.length <= 0 ? (
          ''
        ) : (
          <Swiper {...params}>
            {listHot.map((item, index) => (
              <div className="list-item" key={index}>
                <img className="info-img-pro" src={item && item.mainPic} alt="" />
                <div className="tags">
                    {item.grades ? <span className="item-txt">{item && item.grades}</span> : ''}
                  {/*<span className="item-txt">绿色食品</span>*/}
                </div>
                <div className="pname">{item.productName}</div>
                <div className="lookNumber">
                  <div className="price">
                    <div className="newPrice">
                      <span className="newY">¥</span>
                      <span className="nBig">{(item.salePrice && Math.floor(item.salePrice / 100)) || 0}</span>
                      <span className="decimals">
                        .{(item.salePrice && (item.salePrice / 100).toFixed(2).split('.')[1]) || '00'}
                      </span>
                    </div>
                    <div className="oldPrice">
                      <span className="oldY">¥{item.originalPrice && (item.originalPrice / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

ScrollGoodsModule.options = { disableHeader: false, wrapperClassName: '' }
export default ScrollGoodsModule
