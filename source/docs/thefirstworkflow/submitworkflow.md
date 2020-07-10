---
title: 提交流程
date: 2020-07-09 13:27:32
---

&emsp;&emsp;从下面的URL登录工作流中心页面：
{% note info%}
    站点URL/sitepages/workflowcenterhome.aspx#/home/SSW4
{%endnote%}

&emsp;&emsp;从左侧导航栏点击 {% label primary@常用流程-费用报销%} 进入费用报销列表后，点击列表上方的 {% label primary@+新建%} 按钮，在弹出窗口中填写费用报销单据：
{% fullimg images/aportal-2020-07-10-13-17-10.png,  class, 80%,80% %}

&emsp;&emsp;单据信息填写完成后，点击 {% label primary@提交%} 按钮提交该单据（也可以点击 {% label primary@保存%} 按钮将单据保存为草稿，等待下次继续填写）。
{% fullimg images/aportal-2020-07-10-13-17-38.png,  class, 50%,50% %}

&emsp;&emsp;提交成功后，单据进入Starting状态，等待APortal工作流引擎启动该流程，并根据流程节点的设计驱动流程运转。
{% fullimg images/aportal-2020-07-10-13-18-25.png,  class, 80%,80% %}


{% note danger%}
    至此，APortal的第一个流程的设计、创建、提交已经全部完成。
{%endnote%}