## 快速入手

### 1 所需添加依赖项

* 添加`@storybook/react`到项目

```
npm install @storybook/react --save-dev

```

* 添加`react`，`react-dom`，`@ babel / core`和`babel-loader` 是必须需要的

* react
* react-dom
* @babel/core
* babel-loader 

```
npm install react react-dom --save
npm install babel-loader @babel/core --save-dev

```

### 2 添加npm脚本

* 然后将以下NPM脚本添加到您的脚本中package.json，以便在本指南的后面部分启动故事书

```

{
    "scripts": {
      "storybook": "start-storybook"
    }
}

```

### 3 创建主文件

* 对于基本的Storybook配置，您唯一需要做的就是告诉`Storybook`在哪里找到故事。为此，请创建一个`.storybook/main.js`

* 这将加载`../src`目录下与模式匹配的所有故事   `*.stories.js。`我们建议您将故事与源文件放在同一位置，但是您可以将它们放置在任意位置。

```

module.exports = {
stories: ['../src/**/*.stories.[tj]s'],
};

```

### 4 编写组件

* 现在创建一个`../src/index.stories.js`文件

```

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);


```

* 运行命令 `npm run storybook`

****

![-w1615](media/15918689121718/15918697196279.jpg)

![-w1436](media/15918689121718/15918703173381.jpg)


****

## 项目基本用例

* 当项目运行后 可展示对应的组件库分类列表 列表项目对应于`/stories`目录中的JS文件,分类项目名称就是JS文件名称`0-Welcome.stories.js`

* `*.stories.js` 可输出 `export const` 多个组件 并展示与组件分类目录中

![-w241](media/15918689121718/15918706140483.jpg)
 

```
export const Text1 = () => <Button onClick={action('clicked')}>组件1</Button>;
export const Text2 = () => <Button onClick={action('clicked')}>组件2</Button>;
export const Text3 = () => <Button onClick={action('clicked')}>组件3</Button>;

```



## Webpack的配置项目

* `.storybook/main.js` 中对Webpack的配置项进行添加修改

```

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};


```

* `webpackFinal` 重写方法 对webpack进行配置重写
* 该值应该是一个异步函数，该函数接收一个`webpack`配置，并最终返回一个`webpack`配置。

```
module.exports = {
    webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};

```

```

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

};

```

* 对项目中添加对Less样式的处理

```

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
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                getLocalIdent: (context, localIdentName, localName, options) => {
                  if (
                      context.resourcePath.includes('node_modules') ||
                      context.resourcePath.includes('ant.design.pro.less') ||
                      context.resourcePath.includes('global.less')
                  ) {
                    return localName;
                  }
                  return localIdentName
                }
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

```






