module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "dh-signal/dist" : "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.1.14/SignalControl/web/public/index.php",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
}