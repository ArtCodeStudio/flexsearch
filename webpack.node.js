const Path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  return {
    entry: {
      app: Path.resolve(__dirname, './src/node.js'),
    },
    output: {
      path: Path.join(__dirname, './dist'),
      filename: 'flexsearch.node.js',
      libraryTarget: 'commonjs',
    },
    target: 'node',
    devtool: env.production ? undefined : "inline-source-map",
    mode: env.production ? "production" : "development",
    externals: [nodeExternals()], 
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        RELEASE: "node",
        DEBUG: false,
        PROFILER: false,
        POLYFILL: true,
        SUPPORT_WORKER: false,
        SUPPORT_ENCODER: true,
        SUPPORT_CACHE: true,
        SUPPORT_ASYNC: true,
        SUPPORT_PRESET: true,
        SUPPORT_SUGGESTION: true,
        SUPPORT_SERIALIZE: true,
        SUPPORT_INFO: true,
        SUPPORT_DOCUMENT: true,
        SUPPORT_WHERE: true,
        SUPPORT_PAGINATION: true,
        SUPPORT_OPERATOR: true,
        SUPPORT_CALLBACK: true,
        SUPPORT_LANG: true,
      }),
      new webpack.IgnorePlugin(/config\.js|bundle\.js|export\.js/)
    ],
    module: {
      rules: [
        {
          test: /\.(tsx?)|\.(js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {}
          }
        },
      ],
    },
  }
};

