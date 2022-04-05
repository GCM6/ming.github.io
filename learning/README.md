## 事件委托
 事件委托就是为多个元素添加一个事件监听，而且支持对后续添加元素

>### 点击事件三个阶段（事件传播）
* 捕获阶段 ---> 从**window，document和根元素**开始，事件向下扩散到**目标元素**

* 目标阶段 ---> 事件在点击到元素上触发

* 冒泡阶段 ---> 最后，从目标的元素一直向上扩散传播到根元素 document，window

>### 事件委托到条件
* 监听元素需要有父级元素
* 将监听事件挂载到父节点
* 使用event.target选中目标元素

## window的onload事件和domcontentloaded执行顺序

> onload
>- 支持onload事件的html标签： **< body>**，**< iframe>**，**< img>**，**< script>**等

>- 执行的js事件：image， layer， window

答案：
>- 当dom树构建完成的时候就会执行DCOMContentLoaded事件，当window.onload 执行的时候，页面的所有的样式表，js脚本，图片都已经加载完成了

>- body的onload和window的onload谁在谁的下面谁执行

## 原型
![这是图片](./assets//%E5%8E%9F%E5%9E%8B.jpeg)
