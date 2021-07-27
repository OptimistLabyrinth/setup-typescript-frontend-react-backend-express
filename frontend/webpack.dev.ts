import path from 'path'
import { HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ROOT } from './projectRoot'

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(ROOT, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/i,
        include: [path.join(ROOT, 'src')],
        exclude: [path.join(ROOT, 'node_modules')],
        use: ['ts-loader']
      },
      {
        test: /\.scss$/i,
        include: [path.join(ROOT, 'src')],
        exclude: [path.join(ROOT, 'node_modules')],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|tif|svg|ico)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    modules: [path.join(ROOT, 'node_modules')],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: [path.join(ROOT, 'public')],
    publicPath: '/',
    compress: false,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hot: true,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, 'public/index.html'),
      favicon: path.join(ROOT, 'public/favicon.ico')
    }),
    new HotModuleReplacementPlugin()
  ]
}
