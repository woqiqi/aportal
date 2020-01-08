---
title: 文档书写规范
date: 2020-01-08 11:25:38
---

## Tags

Tag 是基于 Hexo实现的自定义书写标签模板，根据 APortal 文档的需求，我们实现了下面几种 Tag。


### img Tag

居中插入图片。

```
{% fullimg images/media/15765646706398/15765712301730.jpg,  class, 80%,80% %}
```

{% note info%}
img Tag 的参数说明：图片路径，类名，宽度，高度。
注意：除了图片路径为必填外，其余的都属于非必填（宽度和高度如只填一个的话宽高默认相等），且imgtag为单标签不需要end结束标签
{%endnote%}

效果：
{% fullimg images/media/15765646706398/15765712301730.jpg,  class, 80%,80%%}


## label Tag

为文字添加标签背景。

```
{% label primary@APortal%}
```
{% label primary@APortal%}

```
{% label secondary@APortal%}
```
{% label secondary@APortal%}

```
{% label success@APortal%}
```
{% label success@APortal%}

```
{% label danger@APortal%}
```
{% label danger@APortal%}

```
{% label warning@APortal%}
```
{% label warning@APortal%}

```
{% label info@APortal%}
```
{% label info@APortal%}

```
{% label dark@APortal%}
```
{% label dark@APortal%}

```
{% label body@APortal%}
```
{% label body@APortal%}

## note Tag

内容注释块。

```
{% note primary%}
    APortal for Office 365.
{%endnote%}
```
{% note primary%}
    APortal for Office 365.
{%endnote%}

```
{% note secondary%}
    APortal for Office 365.
{%endnote%}
```
{% note secondary%}
    APortal for Office 365.
{%endnote%}

```
{% note success%}
    APortal for Office 365.
{%endnote%}
```
{% note success%}
    APortal for Office 365.
{%endnote%}

```
{% note danger%}
    APortal for Office 365.
{%endnote%}
```
{% note danger%}
    APortal for Office 365.
{%endnote%}

```
{% note warning%}
    APortal for Office 365.
{%endnote%}
```
{% note warning%}
    APortal for Office 365.
{%endnote%}

```
{% note info%}
    APortal for Office 365.
{%endnote%}
```
{% note info%}
    APortal for Office 365.
{%endnote%}

```
{% note dark%}
    APortal for Office 365.
{%endnote%}
```
{% note dark%}
    APortal for Office 365.
{%endnote%}