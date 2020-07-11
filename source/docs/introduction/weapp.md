---
title: 微信小程序
date: 2020-07-11 09:28:06
---

&emsp;&emsp;APortal用户可以使用APortal微信小程序随时查询和自己相关的任务、单据信息，并对待办任务进行审批处理。

## APortal小程序入口

&emsp;&emsp;通过个人微信搜索公众号 {% label primary@APortal工作流平台%}，关注并进入公众号。在公众号右下角点击 {% label primary@关于我们%} 菜单项，在弹出的子菜单中选择 {% label primary@小程序入口%}，即可进入APortal小程序。
{% fullimg images/aportal-2020-07-11-09-29-57.png,  class, 30%,30% %}

## 小程序登录

&emsp;&emsp;首次进入APortal小程序时，用户需要使用本人的手机号码进行验证，以便小程序将用户微信帐号和APortal平台上的用户身份进行关联。进行验证的手机号码需要和APortal系统中登记的手机号码一致。

### 手机号码登记

&emsp;&emsp;用户如果在APortal中还没有登记过手机号码，可以通过浏览器登录APortal系统，点击右上角用户图标，在弹出 {% label primary@我的账户%} 的页面点击编辑按钮，在弹出的个人账户信息页面中输入手机号码并保存。
{% fullimg images/aportal-2020-07-11-09-34-24.png,  class, 50%,50% %}

### 小程序登录

&emsp;&emsp;首次登录小程序时，用户将被导向APortal小程序验证页面。在APortal小程序验证页面输入手机号码后，点击 {% label primary@获取验证码%} 按钮，验证码系统将向该手机号码发送验证码。用户输入正确的验证码后，点击 {% label primary@验证%} 按钮。如果通过验证，则小程序页面转向 {% label primary@我的任务%} 。
{% fullimg images/aportal-2020-07-11-09-36-14.png,  class, 30%,30% %}
已经通过验证的手机再次登录小程序时，无需再次验证。如果要退出当前的用户登录，可以在小程序的设置页面点击 {% label danger@注销%} 按钮。

## 小程序操作

&emsp;&emsp;APortal小程序分为3个主要功能区域，通过点击页面下方的三个标签页进行功能切换：
* 我的任务 – 用户在APortal平台上的待审批任务列表，根据任务状态区分为 {% label primary@待审批%} 和 {% label primary@已审批%} 两个部分。
* 我的单据 – 用户在APortal平台提交的所有单据列表，根据单据状态分为 {% label primary@进行中%} 和 {% label primary@已完成%}。
* 设置 – 小程序功能设置。

#### 我的任务

&emsp;&emsp;在我的任务页面中，用户可以查看等待自己审批的单据，或是已经审批过的单据。进入我的任务页面时，默认列出等待当前用户审批的所有单据。
{% fullimg images/aportal-2020-07-11-09-39-08.png,  class, 30%,30% %}

&emsp;&emsp;在 {% label primary@我的任务%} 页面，用户可以通过点击左上角的菜单按钮，在弹出菜单中选择 {% label primary@我的任务/已审批%} 进入已审批任务列表页面。
{% fullimg images/aportal-2020-07-11-09-48-33.png,  class, 30%,30% %}

&emsp;&emsp;用户可以点击单据区块打开页面中查看单据详情，并进行审批操作。单据详情页面中包含3个区域：

##### 单据信息

{% note info%}
    包含单据主表信息。
{%endnote%}
{% fullimg images/aportal-2020-07-11-09-40-13.png,  class, 30%,30% %}

##### 明细

{% note info%}
    如果该单据包含明细信息，则在明细区域列出单据所有的明细信息供审批人员查看。
{%endnote%}
{% fullimg images/aportal-2020-07-11-09-42-07.png,  class, 30%,30% %}

##### 工作流

{% note info%}
    和单据相关的工作流流转信息，用户可以查看在自己之前其他审批人员提交的审批意见。
{%endnote%}
{% fullimg images/aportal-2020-07-11-09-43-14.png,  class, 30%,30% %}

&emsp;&emsp;审批用户可以点击页面下方的 {% label primary@同意%} 或 {% label danger@拒绝%} 或其他按钮（根据流程设置出现），对单据进行审批处理。在弹出窗口内输入审批意见（可选）后点击 {% label primary@确定%} 按钮提交审批。
{% fullimg images/aportal-2020-07-11-09-44-51.png,  class, 30%,30% %}


#### 我的单据

&emsp;&emsp;在我的单据页面上列出当前用户提交的所有单据，根据单据状态分为 {% label primary@进行中%} 和 {% label primary@已完成%} 两个部分，进入 {% label primary@我的单据%} 列表时默认显示进行中的单据。
{% fullimg images/aportal-2020-07-11-09-51-12.png,  class, 30%,30% %}

&emsp;&emsp;在列表中点击单据进入单据详情页面查看单据信息，单据信息页面包含单据主表信息，明细信息（如果有）和工作流信息3个区域。
{% fullimg images/aportal-2020-07-11-09-52-06.png,  class, 30%,30% %}

&emsp;&emsp;在我的单据页面左上角点击菜单按钮，选择 {% label primary@已完成单据%}，可切换到已完成单据列表页面，列出所有当前用户提交，且单据状态为已完成的单据。
{% fullimg images/aportal-2020-07-11-09-52-53.png,  class, 30%,30% %}

## 小程序设置

&emsp;&emsp;在APortal小程序中点击 {% label primary@设置%} 标签，进入 {% label primary@设置%} 页面。在我的信息页面中列出当前用户的主要信息。
{% fullimg images/aportal-2020-07-11-09-54-20.png,  class, 30%,30% %}

#### 切换语言

&emsp;&emsp;如果需要切换界面语言，可点击 {% label primary@语言%} 按钮，从页面下方显示的中文/英文中选择需要的界面语言。选择后，APortal小程序的界面语言随之切换。
{% fullimg images/aportal-2020-07-11-09-55-47.png,  class, 30%,30% %}

#### 帐号注销

&emsp;&emsp;如果需要从当前帐号注销，可点击 {% label primary@我的信息%} 页面下方的 {% label primary@注销%} 按钮，确认后可从当前帐号注销.
{% fullimg images/aportal-2020-07-11-09-57-14.png,  class, 30%,30% %}