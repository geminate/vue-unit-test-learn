'use strict'
// This is the webpack config used for unit tests.

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: '#inline-source-map'
});

delete webpackConfig.entry;

module.exports = webpackConfig;
