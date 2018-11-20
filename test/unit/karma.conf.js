const webpackConfig = require('../../build/webpack.base.conf');

module.exports = function (config) {
    config.set({
        // 浏览器
        browsers: ['ChromeHeadless'],

        // 测试框架
        frameworks: ['mocha', 'chai'],

        // 测试报告
        reporters: ['progress'],

        // 需要引入的测试文件和被测试文件
        files: ['./index.js'],

        // 预处理
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },

        // karma-webpack 配置
        webpack: webpackConfig,
        webpackMiddleware: {
            logLevel: 'error'
        },

        // 引入的 插件
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-chai'
        ]
    })
};
