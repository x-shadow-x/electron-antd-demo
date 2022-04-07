const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const { override, fixBabelImports, addWebpackAlias } = require("customize-cra")
const addLessLoader = require("customize-cra-less-loader");

function resolve(dir) {
  return path.join(__dirname, `./${dir}`)
}

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addLessLoader({
    cssLoaderOptions: {
      sourceMap: true,
      modules: {
        localIdentName: "[hash:base64:8]",
      },
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#232FFD",
          "@font-size-base": "16px"
        },
      },
    },
  }),
  // fix issues [mini-css-extract-plugin] Conflicting order between
  // https://github.com/arackaf/customize-cra/issues/196 this comment show how to add config in override function of customize-cra
  (config) => {
    // force react-scripts to use newer version of `mini-css-extract-plugin` and ignore css ordering warnings
    // (related to issue: https://github.com/facok/create-react-app/issues/5372)
    // Solution is given here https://github.com/ant-design/ant-design/issues/15696#issuecomment-570484193
    for (let i = 0; i < config.plugins.length; i++) {
      const p = config.plugins[i]
      if (!!p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
        const miniCssExtractOptions = { ...p.options, ignoreOrder: true }
        config.plugins[i] = new MiniCssExtractPlugin(miniCssExtractOptions)
        break
      }
    }
    return config
  }
)
