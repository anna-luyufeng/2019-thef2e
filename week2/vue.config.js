const path = require("path");
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolveSrc("."),
                "@src": resolveSrc("src"),
                "@components": resolveSrc("src/components"),
                "@design": resolveSrc("src/design/index.scss")
            }
        }
    },
    css: {
        // Customize Ant Design Theme Color: https://vue.ant.design/docs/vue/customize-theme/
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#EA5548",
                    "link-color": "#EA5548",
                    "font-family": "'Fjalla One',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
                },
                javascriptEnabled: true
            }
        },
        // Enable CSS source maps.
        sourceMap: true
    },
    publicPath: process.env.NODE_ENV === "production" ? "/2019-thef2e/week2/" : "/",
    outputDir: "../public/week2"
};

function resolveSrc(_path) {
    return path.resolve(__dirname, _path);
}