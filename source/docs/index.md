---
title: APortal for Office 365 系列一：安装前准备
date: 2020-01-03 14:28:17
---
## 导语

APortal for Office 365 系列文章是针对 APortal 的产品使用介绍。APortal 基于微软Office 365 ，为 Office 365 和企业用户带来技术增值和业务增值。

### 什么是 Office 365？

> 由于各个国家的政策和法规有所不同，所以 Office 365 在全球一共有 4 个版本：全球版，美国政府版，德国版及处于中国的世纪互联运营版。以下内容以`全球版` E5 开发者版本 为基础进行介绍。

Office 365 是微软为企业打造的完整的办公云服务，它不仅包含最新版的 Office 软件，同时满足企业对于企业级邮件处理（Exchange Online）、  文件分享（SharePoint Online）、即时消息和可视网络会议（Skype for Business）的需求。Office 365 将帮助您的企业实现办公的运维、管理  和使用体验的革新，为您的企业带来更灵活、高效、更安全可靠的云办公方式。 

<img width=200 src="images/media/15765646706398/15765712301730.jpg" >

<!-- ![-w1440](images/media/15765646706398/15765712301730.jpg =500x500) -->

Office 365 中包含了很多企业应用产品，其中常见的有 Word，Excel，PowerPoint，Exchange，Skype，SharePoint 等。熟悉微软企业应用体系的用户可以看出来，这其实就是之前企业内部应用微软产品的云端系列，如果熟悉企业信息协同的用户一眼就能看到 SharePoint 这个产品，这是过去二十年微软在企业内部信息协同的拳头产品，如今也可以依托云端运行，APortal 当前版本就是针对 SharePoint Online 进行技术和业务的增强。

要使用 APortal 提供的功能，首先需要有一个 SharePoint Online 网站，下面就介绍如何创建一个 SharePoint Online 网站。

## 创建网站

> APortal 支持在现有网站上进行部署，但是为了业务的独立性和连续性，我们强烈建议重新创建新的 `Tenant` 和子网站。特别是对 Aporta 进行评估和试用的用户，我们推荐在新的 `TenantSite`下的子网站上进行。

### 创建前的准备

* 您需要有租户管理员账号和密码。

### 使用浏览器创建

打开浏览器，输入SharePoint Online 管理中心地址： https://yourtenantname-admin.sharepoint.cn/，以我们地址为例： https://aportaldev-admin.sharepoint.com/。

管理中心主页：
![-w1434](images/media/15765646706398/15765696856194.jpg)

点击左侧菜单中的 `活动站点`，然后点击右侧内容中的 `创建` 按钮；
![-w1440](images/media/15765646706398/15766329020992.jpg)


选择 `团队网站`
![-w1440](images/media/15765646706398/15766329750362.jpg)

输入 `站点名称`，`组所有者`和`选择网站语言`，点击`下一步`
![-w1440](images/media/15765646706398/15766330369238.jpg)

等待网站集创建完成：
![-w1440](images/media/15765646706398/15766330656810.jpg)

创建完成后，通过地址 https://aportaldev.sharepoint.com/sites/uat 访问创建好的网站集和网站：
![-w1440](images/media/15765646706398/15766332481009.jpg)

为了方便对 APortal 进行评估，建议在网站集下创建子网站进行，这样就不用频繁需要租户管理员进行操作。
![-w1440](images/media/15765646706398/15766333633951.jpg)

点击创建子网站，填写创建子网站的相关内容，使用默认选项，点击页面下方的`创建`按钮：
![-w1440](images/media/15765646706398/15766334768686.jpg)

创建完成后，会跳转到新创建的子网站首页，表示准备工作已经就绪。
![-w1440](images/media/15765646706398/15766336022347.jpg)

### 使用脚本创建

## 结束语