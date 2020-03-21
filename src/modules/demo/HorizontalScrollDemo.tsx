import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import HorizontalScroll from '../../components/HorizontalScroll'

const DemoPage: PageComponent = props => {

   var listHot = [
           {
               "kid": 468774122299653,
               "classifyKid": 459260784156672,
               "title": "糖三角青团",
               "type": 0,
               "resourceUrl": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488984971886607.jpg?w=750&h=722",
               "coverImg": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488984971886607.jpg?w=750&h=722",
               "duration": 0,
               "statisticResult": {
                   "targetType": "cooking",
                   "targetKid": "468774122299653",
                   "likeCount": 0,
                   "viewCount": 7,
                   "commentCount": 0,
                   "favoriteCount": 0,
                   "shareCount": 0,
                   "followCount": 0,
                   "joinCount": 0,
                   "finishCount": 0,
                   "customMapper": {}
               },
               "behaviorResult": ''
           },
           {
               "kid": 468774122299648,
               "classifyKid": 459260784156672,
               "title": "豆沙青团",
               "type": 0,
               "resourceUrl": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488985047384067.jpg?w=750&h=722",
               "coverImg": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488985047384067.jpg?w=750&h=722",
               "duration": 0,
               "statisticResult": {
                   "targetType": "cooking",
                   "targetKid": "468774122299648",
                   "likeCount": 0,
                   "viewCount": 11,
                   "commentCount": 0,
                   "favoriteCount": 0,
                   "shareCount": 0,
                   "followCount": 0,
                   "joinCount": 0,
                   "finishCount": 0,
                   "customMapper": {}
               },
               "behaviorResult": ''
           },
           {
               "kid": 468774122299636,
               "classifyKid": 459260784156672,
               "title": "艾蒿蒸菜",
               "type": 0,
               "resourceUrl": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488984997052419.jpg?w=750&h=722",
               "coverImg": "https://cdn.lajsf.com/nutrition-plan/image/default/common/488984997052419.jpg?w=750&h=722",
               "duration": 0,
               "statisticResult": {
                   "targetType": "cooking",
                   "targetKid": "468774122299636",
                   "likeCount": 0,
                   "viewCount": 6,
                   "commentCount": 0,
                   "favoriteCount": 0,
                   "shareCount": 0,
                   "followCount": 0,
                   "joinCount": 0,
                   "finishCount": 0,
                   "customMapper": {}
               },
               "behaviorResult": ''
           }
       ]
    const renderList = () => {
      return (
          listHot.map((item:any, index:number) => (
              <div className="list-item" key={index}>
                <img className="info-img-pro" src={item && item.coverImg} alt="" />
                <div className="tags">
                    {item.grades ? <span className="item-txt">{item && item.grades}</span> : ''}
                </div>
                <div className="pname">{item.title}</div>
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
          ))
      )
    }

    /**
     *
     *    domList : 要渲染的横向列表 dom （自定义）
     *
     *    slidesPerView: 可选（默认2.2） 首屏可以看到几个item,支持小数 eg: 1.4
     *
     *    spaceBetween: 可选 (默认 30)  两个item 之间的距离   eg: 20
     *
     */

    return (
      <div className="demo-wrap srcoll">
          {listHot.length>0 ? <HorizontalScroll domList={renderList()}/>:null}
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
