# DC-Plugins

<p>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/github/package-json/v/dvgis/dc-plugins?color=orange&logo=github" />
<img src="https://img.shields.io/npm/dw/@dvgis/dc-plugins?logo=npm"/>
</p>

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

> DC-SDK 插件库，插件库包括动画，特效，纹理，热图，clusterLayer，和 Mapv。

> [主页](http://dc.dvgis.cn)

```warning
Tips：本框架是 JS+GIS 的框架包。开发者需要有一定的前端技术和 GIS 相关技术
```

## 安装

> CDN

```html
<!--基础包-->
<script src="libs/dc-sdk/dc.base.min.js"></script>
<!--核心包-->
<script src="libs/dc-sdk/dc.core.min.js"></script>
<!--插件包-->
<script src="libs/dc-sdk/plugins/dc.plugins.min.js"></script>
<!--主要样式-->
<link href="libs/dc-sdk/dc.core.min.css" rel="stylesheet" type="text/css" />
```

> NPM / YARN

```shell
   yarn add @dvgis/dc-sdk @dvgis/dc-plugins
   npm install @dvgis/dc-sdk @dvgis/dc-plugins
```

```js
import DC from  'dvgis/dc-sdk/dist/dc.base.min' //基础包
import DcCore from 'dvgis/dc-sdk/dist/dc.core.min' //核心包
import DcPlugins from 'dvgis/dc-plugins/dist/dc.plugins.min' //插件包
import 'dvgis/dc-sdk/dist/dc.core.min.css' //主要样式
```

## 配置

> Vue

```js
// vue.config.js vue 文件

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = {
  // 其他配置
  chainWebpack: config => {
    config.resolve.alias.set('dvgis', path.resolve(__dirname, dvgisDist))
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
          to: 'libs/dc-sdk/resources'
        }
      ]
    ])
  }
}
```

## 开始

```js
DC.use(DcCore)
DC.use(DcPlugins)
DC.ready(() => {
  let viewer = new DC.Viewer(divId) // divId 为一个div节点的Id属性值，如果不传入，会无法初始化3D场景
})
```

## 文档

[DC Api](https://resource.dvgis.cn/dc-api)

[Cesium Api](https://cesium.com/docs/cesiumjs-ref-doc/)

## 示例

| ![图片](http://dc.dvgis.cn/examples/images/layer/cluster_clustering.gif)  | ![图片](http://dc.dvgis.cn/examples/images/overlay/polyline_image_trail.gif) | ![图片](http://dc.dvgis.cn/examples/images/overlay/polyline_flow.gif) | ![图片](http://dc.dvgis.cn/examples/images/overlay/wall_trail.gif) |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![图片](http://dc.dvgis.cn/examples/images/scene/intro.gif) | ![图片](http://dc.dvgis.cn/examples/images/scene/globe_rotate.gif)  | ![图片](http://dc.dvgis.cn/examples/images/scene/circle_scan.gif) | ![图片](http://dc.dvgis.cn/examples/images/scene/radar_scan.gif) |
| ![图片](http://dc.dvgis.cn/examples/images/scene/snow.gif) | ![图片](http://dc.dvgis.cn/examples/images/scene/fog.png)  | ![图片](http://dc.dvgis.cn/examples/images/scene/brightness.png) | ![图片](http://dc.dvgis.cn/examples/images/scene/roaming_tracked.gif) |


[更多>>](http://dc.dvgis.cn/#/examples)

## 版权声明

```warning
1.框架是一个基本平台，完全开源，任何个人和机构可以修改、重构，无需经过我方授权。
2.后期会添加一系列针对性的插件和工具，会适量的开源。
3.任何个人和机构在遵守下列条件的前提下可以永久免费使用:
   1)程序包完整引用；
   2)保留此版权信息在控制台输出 
我方保留对此版权信息的最终解释权。
```

## 感谢
