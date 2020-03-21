import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import ContentSource from '../../components/ContentSource'
import Message from '../../components/Message'
import assets from "../../assets";

const DemoPage: PageComponent = props => {
    let [noDataMsg, setNoDataMsg] = useState('初始化')
    /**
     *   preset可选参数:
     *
     *   'no-address': {
            image: assets.empty.no_address,
            content: '您还没有填写收货地址哦~',
          },
             'no-cart': {
            image: assets.empty.no_cart,
            content: '购物车竟然是空的~',
          },
             'no-collect': {
            image: assets.empty.no_collect,
            content: '暂无收藏内容~',
          },
             'no-comment': {
            image: assets.empty.no_comment,
            content: '暂无评论',
          },
             'no-course': {
            image: assets.empty.no_course,
            content: '您还没有课程哦~',
          },
             'no-data': {
            image: assets.empty.no_data,
            content: '暂无相关数据',
          },
             'no-earnings': {
            image: assets.empty.no_earnings,
            content: '暂无收益数据，要加把力啦~',
          },
             'no-follow': {
            image: assets.empty.no_follow,
            content: '还没有关注~',
          },
             'no-message': {
            image: assets.empty.no_message,
            content: '哎呀，竟然一条消息也没有~',
          },
             'no-network': {
            image: assets.empty.no_network,
            content: '内容加载失败，请检查网络',
          },
             'no-order': {
            image: assets.empty.no_order,
            content: '您目前没有订单哦~',
          },
             'no-report': {
            image: assets.empty.no_report,
            content: '您目前没有报告哦~',
          },
             'no-search': {
            image: assets.empty.no_search,
            content: '未搜索到内容',
          },
             'sold-out': {
            image: assets.empty.no_data,
            content: '商品过期不存在~',
          },
          shield: {
            image: assets.empty.no_data,
            content: '内容已下架',
          },

          'request-delete': {
            image: assets.empty.no_cart,
            content: '访问内容被删除！',
          },
          'request-fail': {
            image: assets.empty.no_data,
            content: '页面错误！',
          },
     *
     *
     *
     *   image: 自定义图片地址
     *   content: 自定义显示文本
     *
     */

    return (
      <div className="demo-wrap">

          <Message image={assets.empty.no_data} content={noDataMsg} />

          <Message preset="no-data" />

      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
