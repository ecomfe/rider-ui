rider-ui
===

基于 [`rider`](https://github.com/ecomfe/rider) 的 UI 样式库，用于快速构建移动应用界面。

## 安装与配置

在 [`edp`](https://github.com/ecomfe/edp) 中，推荐使用 [`edpx-mobile`](https://github.com/ecomfe/edpx-mobile) 来自动生成包含 `rider-ui` 的项目。

如需 **手动安装**，执行：

    npm install rider-ui --save

在 `stylus` 配置引入 `rider` 之后使用 `rider-ui` 插件：

```javascript
var epr = require('edp-provider-rider');
var riderUI = require('rider-ui');

function stylusConfig(style) {
    style.use(epr.plugin());
    style.use(riderUI());
}
```

*注：请确保 edp-provider-rider 的版本与 package.json 中的配置相符。*

## 文档

### Hello World

以 `默认主题` 为例，在主样式文件中引入：

```styl
@require 'rider-ui/default'
```

之后会生成该主题预定好的样式，包含 *样式初始化* 与 *控件样式*。

在 `html` 中直接写预定样式：

```html
<nav class="ui-bar" data-ui="primary header static">
    <a href="#" class="ui-btn" data-ui="primary">返回</a>
    <h1 data-ui="title">Hello World</h1>
    <a href="#" class="ui-btn" data-ui="primary">关于</a>
</nav>
```

### 结构

`rider-ui` 目录结构如下：

    rider-ui
        core        // 核心部分，是生成 UI 的 Mixin，不会向页面输出样式
        default     // 默认主题，通过调用核心部分的 Mixin 生成样式

在真实项目中，推荐采用自定义项目主题的方式开发，`default` 主题即为自定义主题的示例。

### API

当前版本提供了 **按钮**、**按钮组**、**工具栏**、**内容** 四个 UI 组件。

#### 配置与全局方法

```styl
// UI 状态的前缀
$-ui-attr ?= 'data-ui'
// 使用图标字体时，定义的图标前缀
$-ui-icon-prefix ?= 'icon-'
```

在引入 rider-ui 之前定义配置可生效，比如：

```
$-ui-attr = 'data-rider'
@require 'rider-ui/default'

// 配置后：<a href="#" class="ui-btn" data-rider="active">Hi</a>
```

##### +ui-set-type($ui-type)

*类型：block mixin*

增加指定类型的按钮样式。

+ $ui-type `{string}` 样式类型

#### 按钮(btn)

class: `ui-btn`

一个生成按钮样式的示例：

```styl
// 引入 core
@require 'rider-ui/core/btn'

// $ui-size 等参数本例中省略，可参考 default 主题

.ui-btn
    // 默认尺寸与样式
    ui-btn-base()
    ui-btn-size($ui-size)
    ui-btn-style($ui-colors)

    // 定义一个类型为 clear 的样式
    +ui-btn-set-type('clear')
        ui-btn-style($ui-colors-clear)
```

在 html 中这样使用样式：

```html
<a href="#" class="ui-btn">默认样式</a>
<a href="#" class="ui-btn" data-ui="clear">Clear样式</a>
```

##### +ui-btn-set-active()

*类型：block mixin*

增加 `active` 状态样式。

##### +ui-btn-set-disabled()

*类型：block mixin*

增加 `disabled` 状态样式。

##### ui-btn-size($ui-size)

*类型：mixin*

设置按钮尺寸。

+ $ui-size `{object}`
    + .height `{unit}` 高度
    + .padding `{unit}` 内边距
    + .font-size `{unit}` 文字大小
    + .border-width `{unit}` 边框尺寸

##### ui-btn-icon($ui-size)

*类型：mixin*

设置按钮中的图标尺寸，参数参考 `ui-btn-size()`。

##### ui-btn-style($ui-colors, $ui-active-colors = null)

*类型：mixin*

设置按钮颜色相关样式。

+ $ui-colors `{object}`
    + .bg `{rgba}` 背景颜色
    + .border `{rgba}` 边框颜色
    + .text `{rgba}` 文字颜色

##### ui-btn-base()

*类型：mixin*

设置按钮基础样式。

#### 按钮组(btns)

class: `ui-btns`

##### ui-btns-base()

*类型：mixin*

设置按钮组基础样式。

#### 工具栏(bar)

class: `ui-bar`

##### ui-bar-style($ui-colors)

*类型：mixin*

设置工具栏颜色相关样式。

+ $ui-colors `{object}`
    + .bg `{rgba}` 背景颜色
    + .border `{rgba}` 边框颜色
    + .text `{rgba}` 文字颜色

##### ui-bar-base($ui-base, $ui-default-colors, $ui-btn-size)

*类型：mixin*

设置工具栏基础样式。

+ $ui-base `{object}`
    + .height `{unit}` 高度
    + .padding `{unit}` 内边距
    + .font-size `{unit}` 文字大小
    + .border-width `{unit}` 边框尺寸
    + .z-index `{unit}` 工具栏的层级
    + .title-z-index `{unit}` 标题的层级
    + .btn-z-index `{unit}` 按钮的层级
+ $ui-default-colors `{object}` 默认颜色方案，参考 `ui-bar-style()` 文档
+ $ui-btn-size `{object}` 工具栏按钮尺寸，参考 `ui-btn-style()` 文档

#### 内容(content)

class: `ui-content`

##### ui-content($ui-font-size, $ui-line-height, $ui-heading-ratio)

*类型：mixin*

设置排版样式，行距采用 **垂直的旋律** 排版。

+ $ui-font-size `{unit}` 字体大小
+ $ui-line-height `{unit}` 行高
+ $ui-heading-ratio `{array}` 长度为6的数组，值为 `h1` 到 `h6` 字体相对普通文本的倍数
