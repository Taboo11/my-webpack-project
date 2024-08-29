const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Выходной файл
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Для работы с CSS файлами
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  mode: 'production', // Режим разработки production   development
  // watch: true,
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Укажите путь к вашему HTML-шаблону
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Путь к статическим файлам
    },
    compress: true, // Включает сжатие gzip
    port: 9000, // Порт, на котором будет работать сервер разработки
    open: true, // Автоматически открывает браузер после запуска сервера
    hot: true, // Включает hot module replacement (HMR)
  },
};
