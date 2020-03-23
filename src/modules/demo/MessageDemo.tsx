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
     *   image: 自定义图片地址
     *   content: 自定义显示文本
     *
     */

    return (
      <div className="demo-wrap">
          <div className="line-tip">初始化数据</div>
          <Message image={assets.empty.no_data} content={noDataMsg} />
          <div className="line-tip">没数据</div>
          <Message preset="no-data" />
          <div className="line-tip">暂无收益</div>
          <Message preset="no-earnings" />
          <div className="line-tip">页面错误</div>
          <Message preset="request-fail" />
          <div className="line-tip">内容下架</div>
          <Message preset="shield" />
          <div className="line-tip">没有网络</div>
          <Message preset="no-network" />
          <div className="line-tip">暂无评论</div>
          <Message preset="no-comment" />
          <div className="line-tip">购物车空</div>
          <Message preset="no-cart" />
          <div className="line-tip">未搜索到</div>
          <Message preset="no-search" />
          <div className="line-tip">访问内容被删除</div>
          <Message preset="request-delete" />
          <div className="line-tip">您目前没有订单</div>
          <Message preset="no-order" />
          <div className="line-tip">页面错误</div>
          <Message preset="request-fail" />
          
          
          
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
