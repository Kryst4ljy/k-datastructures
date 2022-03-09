const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 创建HTML文件插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist目录插件

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.join(__dirname, "../src/main.js"),
  },
  target: "node",
  output: {
    path: path.join(__dirname, "../dist"), // 输出路径
    publicPath: "", // 打包后的前缀路径
    filename: "k-datastructures.common.js", // 打包文件命名
    libraryTarget: "commonjs2",
    libraryExport: "default",
  },
  plugins: [new CleanWebpackPlugin()],
};
