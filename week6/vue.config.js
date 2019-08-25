const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolveSrc("."),
        "@src": resolveSrc("src"),
        "@assets": resolveSrc("src/assets"),
        "@views": resolveSrc("src/views"),
        "@components": resolveSrc("src/components"),
        "@design": resolveSrc("src/design/index.scss")
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/2019-thef2e/week6/" : "/",
  outputDir: "../public/week6"
};

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
