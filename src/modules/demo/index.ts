import DemoPage from './DemoPage'

const demoModule: Module = {
  name: 'demo',
  routes: [
    {
      name: '演示2',
      path: '/demo/demo',
      component: DemoPage,
    },
  ],
}
export default demoModule
