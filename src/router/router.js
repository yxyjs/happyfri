import App from '../App'
export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../views/home/home')), 'home')
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('../views/item/item')), 'item')
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(require('../views/score/score')), 'score')
  },]
}]