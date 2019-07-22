import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: () => lazyLoadView(
                import ('@views/home')),
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: () => lazyLoadView(
                import ('@views/statistics')),
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => lazyLoadView(
                import ('@views/settings')),
        },
    ],
})

function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
        component: AsyncView,
        loading: require('@views/_loading').default,
        delay: 400,
        error: require('@views/_timeout').default,
        timeout: 10000,
    })
    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            return h(AsyncHandler, data, children)
        },
    })
}