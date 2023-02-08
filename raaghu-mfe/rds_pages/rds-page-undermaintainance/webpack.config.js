const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const devdeps = require("../../package.json").devDependencies;
const deps = require("../../package.json").dependencies;
require("dotenv").config({ path: "./.env" });

const buildDate = new Date().toLocaleString();

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  console.log({ isProduction });
  return {
    entry: "./src/index.ts",
    mode: process.env.NODE_ENV || "development",
    devServer: {
      port: 8010,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {

          test: /\.(scss|css)$/,

          use: ['style-loader', 'css-loader', 'sass-loader'],

          exclude: '/node_modules/',

        },
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [
              "react-hot-loader/babel",
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      ],
    },

    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: "UnderMaintainance",
        filename: "remoteEntry.js",
        exposes: {
          // expose each page
          "./UnderMaintainance": "./src/Maintainance/Maintainance"
        },
        shared: {
          ...devdeps,
          ...deps,

          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
          'luxon': {
            singleton: true,
            version: '3.1.0',
            requiredVersion: deps['luxon']
          }
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };
};
