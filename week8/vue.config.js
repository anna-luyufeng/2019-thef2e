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
    sourceMap: true,
    // https://github.com/youzan/vant/blob/dev/src/style/var.less
    loaderOptions: {
      less: {
        modifyVars: {
          green: "#654D8D",
          "text-color": "white",
          "popup-background-color": "#260235",
          "nav-bar-height": "64px",
          "nav-bar-background-color": "#3C1B49",
          "nav-bar-icon-color": "white",
          "nav-bar-title-text-color": "white",
          "search-padding": 0,
          "search-background-color": "transparent",
          "button-border-radius": "4px",
          "cell-background-color": "transparent",
          "cell-horizontal-padding": "0",
          "cell-group-background-color": "transparent",
          "field-input-text-color": "white",
          "field-placeholder-text-color": "rgba(255,255,255,0.5)",
          "switch-background-color": "rgba(255,255,255,0.5)",
          "switch-on-background-color": "#654D8D"
        }
      }
    }
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/2019-thef2e/week8/" : "/",
  outputDir: "../public/week8"
};

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
