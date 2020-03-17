import React, { useEffect, useState } from 'react'
import assets from 'assets'
import './message.css'
interface MessagePreset {
  image: string
  content: string
}
const presets: { [key: string]: MessagePreset } = {
  'no-address': {
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
}
interface Props {
  image?: any
  preset?: keyof typeof presets
  title?: string
  content?: string
  actionTitle?: string
  textColor?: string
  style?: any
  onAction?: () => void
}
const Message: React.FC<Props> = ({
  image,
  preset,
  title,
  content,
  actionTitle,
  textColor = '#999',
  onAction,
  style = { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
  ...props
}) => {
  const [config, setConfig] = useState({} as any)
  const handleAction = () => {
    if (!onAction) {
      throw new Error('`onAction` is required if there is an action button.')
    }

    onAction()
  }
  useEffect(() => {
    if (preset) {
      setConfig(presets[preset] || {})
    } else {
      setConfig({
        image: image,
        title: title,
        content: content,
        actionTitle: actionTitle,
      })
    }
  }, [preset, image, title, content, actionTitle])

  const renderImage = () => {
    return config.image ? <img src={config.image} className="msg-img" alt="" /> : null
  }
  const renderTitle = () => {
    return config.title ? <div className="title">{config.title}</div> : null
  }

  const renderContent = () => {
    return config.content ? (
      <div style={{ color: textColor }} className="content">
        {config.content}
      </div>
    ) : null
  }
  const actionButton = () => {
    return actionTitle ? (
      <div onClick={handleAction} className="actionButton">
        <div className="actionTitle">{actionTitle}</div>
      </div>
    ) : null
  }
  return (
    <div className="message-wrap" style={style}>
      {renderImage()}
      {renderTitle()}
      {renderContent()}
      {actionButton()}
    </div>
  )
}
export default Message
