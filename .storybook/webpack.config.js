const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
  defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // use @babel/preset-react for JSX and env (instead of staged presets)
  defaultConfig.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  defaultConfig.module.rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties"),
  ]

  defaultConfig.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?modules', 'resolve-url-loader', 'sass-loader'],
      include: path.resolve(__dirname, '..', 'src'),
    },
    {

      // test: /\.(png|jpg|gif)$/,
      /** the above line caused svgs to not load when we are running storyboard.
       *  So added svg along with some font formats just in case. */
      test: /\.(woff|woff2|eot|ttf|svg|gif|png|jpg)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.(woff2?)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }
  );

  defaultConfig.resolve.modules.push('src');

  return defaultConfig
}