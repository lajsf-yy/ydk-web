import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
// import DownloadAppDemo from './DownloadAppDemo'
// import ContentSourceDemo from './ContentSourceDemo'
// import AddressPickerDemo from './AddressPickerDemo'
// import NavDemo from './NavDemo'
// import MessageDemo from './MessageDemo'
// import ScoreStarDemo from './ScoreStarDemo'
// import CommentDemo from './CommentDemo'
// import CommentOldDemo from './CommentOldDemo'
// import HorizontalScrollDemo from './HorizontalScrollDemo'
const DownloadAppDemo = Loadable({
    loader: () => import('./DownloadAppDemo'),
    loading: Loading,
})
const ContentSourceDemo = Loadable({
    loader: () => import('./ContentSourceDemo'),
    loading: Loading,
})
const AddressPickerDemo = Loadable({
    loader: () => import('./AddressPickerDemo'),
    loading: Loading,
})
const NavDemo = Loadable({
    loader: () => import('./NavDemo'),
    loading: Loading,
})
const MessageDemo = Loadable({
    loader: () => import('./MessageDemo'),
    loading: Loading,
})
const ScoreStarDemo = Loadable({
    loader: () => import('./ScoreStarDemo'),
    loading: Loading,
})
const CommentDemo = Loadable({
    loader: () => import('./CommentDemo'),
    loading: Loading,
})
const CommentOldDemo = Loadable({
    loader: () => import('./CommentOldDemo'),
    loading: Loading,
})
const HorizontalScrollDemo = Loadable({
    loader: () => import('./HorizontalScrollDemo'),
    loading: Loading,
})
const demoModule: Module = {
  name: 'demo',
  routes: [
    {
      name: '打开Appdemo',
      path: '/openApp/demo',
      component: DownloadAppDemo,
    },
    {
      name: '图文并茂显示',
      path: '/contentSource/demo',
      component: ContentSourceDemo,
    },
    {
      name: '地址选择器',
      path: '/addressPicker/demo',
      component: AddressPickerDemo,
    },
    {
      name: '顶部导航',
      path: '/nav/demo',
      component: NavDemo,
    },
    {
      name: '状态信息',
      path: '/message/demo',
      component: MessageDemo,
    },
    {
      name: '评分组件',
      path: '/scoreStar/demo',
      component: ScoreStarDemo,
    },
    {
        name: '带回复评论组件',
        path: '/Comment/demo',
        component: CommentDemo,
    },
    {
        name: '不带回复评论组件',
        path: '/Comment/demo',
        component: CommentOldDemo,
    },
    {
        name: '横向滚动滑动组件',
        path: '/HorizontalScroll/demo',
        component:HorizontalScrollDemo,
    },
  ],
}
export default demoModule