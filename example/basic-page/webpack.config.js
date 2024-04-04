import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInlineSourcePlugin from '@effortlessmotion/html-webpack-inline-source-plugin';

const wd = path.dirname(new URL(import.meta.url).pathname);
export default {
  //mode: 'none', // Set mode to 'none' to disable minification
  entry: path.resolve(wd, './main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(wd, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$', // embed all JavaScript and CSS bundles into the HTML file
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};