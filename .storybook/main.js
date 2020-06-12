const path = require('path');


module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.less$/,
      exclude: path.resolve(__dirname, '../node_modules'),
      include: path.resolve(__dirname, '../components'),
          use: [
            {
              loader: 'style-loader',
              options: { }
            },
            {
              loader: 'css-loader',
              options: {
                // importLoaders: 1,
                modules: true,
                //localIdentName: '[path][name]__[local]--[hash:base64:5]',
                /*getLocalIdent: (context, localIdentName, localName, options) => {
                  if (
                      context.resourcePath.includes('node_modules') ||
                      context.resourcePath.includes('ant.design.pro.less') ||
                      context.resourcePath.includes('global.less')
                  ) {
                    return localName;
                  }
                  return localIdentName
                }*/
              }
            },
            {
              loader: 'less-loader',
              options: {
                importLoaders: 1,
              }
            },
          ],
    });

    /*config.module.rules.push({
      test: /\.less$/,
      include: path.resolve(__dirname, '../node_modules'),
      exclude: path.resolve(__dirname, '../components'),
      use: ['style-loader','css-loader','less-loader'],
    });*/

/*  test: /.scss$/,
        exclude: path.resolve(dirname, 'src/styles'), // 通过exclude让这个目录下的scss不走css-modules
        loader: 'style!css?modules&localIdentName=[name][local]!sass?sourceMap=true'
    }, {
    test: /.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!sass?sourceMap=true'*/

    return config;
  },

};
