const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostCSSPresetEnv = require('postcss-preset-env');
const SvgToMiniDataURI = require('mini-svg-data-uri');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'eval',
  entry: [
    './src/js/app.js',
    './src/less/app.less',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bartoszdebicki.[hash].js',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                PostCSSPresetEnv(),
              ],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => SvgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bartoszdebicki.[hash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/pdf/*.pdf',
          to: 'files/[name].pdf',
        },
      ],
    }),
  ],
};

exports.default = config;
