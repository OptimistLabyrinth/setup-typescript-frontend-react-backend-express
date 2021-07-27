import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { ROOT } from './projectRoot'

export default {
  mode: 'production',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.join(ROOT, 'build'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/i,
        include: [path.join(ROOT, 'src')],
        exclude: [path.join(ROOT, 'node_modules')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/i,
        include: [path.join(ROOT, 'src')],
        exclude: [path.join(ROOT, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
  devtool: 'source-map',
  target: ['web', 'es5'],
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(ROOT, 'public/index.html'),
      favicon: path.join(ROOT, 'public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].chunk.css',
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        exclude: /node_modules/
      }),
      new TerserPlugin({
        parallel: true
      })
    ]
  }
}
