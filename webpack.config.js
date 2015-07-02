var webpack = require('webpack');
var React = require('react');
var path = require('path');


module.exports = {
    devtool: 'eval', // this makes a bunch of eval statements for purpose of debugging... obviously only for development
    entry: path.join(__dirname, 'app.js'),
    output: {
        path: '__build__',
        filename: 'gitcards.js',
        chunkFileName: '[name].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js')
    ]
};