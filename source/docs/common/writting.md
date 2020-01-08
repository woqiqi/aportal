---
title: 文档书写规范
date: 2020-01-08 11:25:38
---
## img tag的写法
imgtag的tag名为：fullimg或fi
imgtag的顺序为：图片路径 ， 类名 ， 宽度，高度 
{% note primary%}
注意：除了图片路径为必填外，其余的都属于非必填（宽度和高度如只填一个的话宽高默认相等），且imgtag为单标签不需要end结束标签
{%endnote%}
示例：
```
{% fullimg images/media/15765646706398/15765712301730.jpg,  aaa, 80%,80%%}
```
{% fullimg images/media/15765646706398/15765712301730.jpg,  aaa, 80%,80%%}


## label tag的写法
labeltag的tag名为：label
labeltag的顺序为：字体颜色@文字
labeltag字体颜色有：primary，secondary，success，danger，warning，info，dark，body，muted
{% note primary%}
注意：label为单标签不需要end结束标签
{%endnote%}
示例：
```
{% label primary@primary%}
```
各种颜色展示
{% label primary@primary%}
{% label secondary@secondary%}
{% label success@success%}
{% label danger@danger%}
{% label warning@warning%}
{% label info@info%}
{% label dark@dark%}
{% label body@body%}
{% label muted@muted%}

## note tag的写法
notetag的tag名为：note
notetag颜色有：primary，secondary，success，danger，warning，info，dark，body，muted
{% note primary%}
注意：note不是单标签，需要end结束标签
{%endnote%}
示例：
```
{% note primary%}
    primary
{%endnote%}
```
{% note primary%}
    primary
{%endnote%}