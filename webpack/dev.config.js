const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',

    entry: [
        path.join(__dirname, '..', 'src', 'app'),
        path.join(__dirname, '..', 'src', 'styles', 'main'),
    ],

    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'index.js',
    },

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        host: '0.0.0.0',
        port: '8080'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: ['file-loader'],
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 16535, // Convert images < 16kb to base64 strings
                        name: 'images/[hash]-[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true,
                        }
                    },
                    'import-glob-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            alwaysWriteToDisk: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ]
};

module.exports = config;
