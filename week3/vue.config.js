const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolveSrc('.'),
                '@src': resolveSrc('src'),
                '@components': resolveSrc('src/components'),
                '@design': resolveSrc('src/design/index.scss'),
            },
        },
    },
    css: {
        // Enable CSS source maps.
        sourceMap: true,
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/2019-thef2e/week3/' : '/',
    outputDir: '../public/week3',
}

function resolveSrc(_path) {
    return path.resolve(__dirname, _path)
}