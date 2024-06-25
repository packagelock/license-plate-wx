## 项目概述

z-license-plate-mp 是一个专为微信小程序打造的车牌输入键盘组件。它提供了一个自定义的车牌号码输入键盘，方便用户在微信小程序中输入车牌号码。

## 安装与使用

### 安装步骤

1. 打开命令行工具，进入你的微信小程序项目目录。
2. 使用 npm 安装 license-plate-wx 组件：

```bash
npm i license-plate-wx
```

3. 安装完成后，在微信开发者工具中点击顶部菜单栏的 "工具"，然后选择 "构建 npm"。

### 使用方法

- 在需要使用组件的地方引入，即在对应 json 文件中配置

```javascript
{
  "usingComponents": {
    "license-plate-wx": "license-plate-wx"
  }
}
```

- 配置好后即可在 wxml 文件中使用

```javascript
<view class="container">
  <license-plate-wx />
</view>
```

### Props
| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `title` | String | 车牌键盘 | 标题 |
| `licensePlateShow` | Boolean | `false` | 控制组件是否显示 |
| `isVibrate` | Boolean | `false` | 控制点击输入时是否启用震动反馈 |
| `isOnOverlayClose` | Boolean | `false` | 控制点击覆盖层是否关闭组件 |

### Events
| 事件名 | 描述 |
| --- | --- |
| `onCancel` | 点击取消按钮时触发 |
| `onConfirm` | 点击完成时触发 |

## 示例代码
```javascript
<license-plate-wx bindonCancel="onCancel" bindonConfirm="onConfirm" isOnOverlayClose />

onConfirm(value){
    // 接受车牌信息
}
onCancel(){
    // 点击了取消之后处理事件
}
```

## 图片展示
![img](https://img.picui.cn/free/2024/06/24/66791b9309b6a.png)