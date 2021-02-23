const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template/index.html'),
      filename: 'index.html',
      title: 'Ura-Kata',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'images/*',
          to: '',
        },
        {
          from: 'css/*',
          to: '',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
