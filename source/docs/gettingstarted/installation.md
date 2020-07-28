---
title: 安装
date: 2020-01-03 14:28:17
---

## 导语

&emsp;&emsp;在安装 APortal 管理工具之前，请仔细阅读前一章，根据实际需求谨慎选择安装环境，安装 APortal 会在相应的网站生成列表和推送网站资源，如果是已经存在的生产网站，可能会造成不可逆转的数据混淆。

## 安装 APortal 管理工具

&emsp;&emsp;以管理员身份打开PowerShell，在命令行窗口中执行下面的命令安装APortal.PowerShell工具：
{%note info%}
准备好安装环境后，安装过程就十分简单，只需要运行安装命令即可。
{%endnote%}

```powershell
# 安装最新版本
Install-Module -Name APortal.PowerShell
# 安装特定版本， 版本号根据实际情况进行修改
Install-Module -Name APortal.PowerShell -RequiredVersion 0.0.9
```

&emsp;&emsp;开始安装后根据系统的安全设置，可能会出现下面的提示信息：
{% fullimg images/aportal-2020-07-09-11-35-18.png,  class, 80%,80% %}
&emsp;&emsp;输入 `Y` 或 `A` 后，自定下载包安装。安装完成后，可以使用命令确认模块是否安装正确。

```powershell
Get-Module -Name APortal.PowerShell -ListAvailable
```

{% fullimg images/aportal-2020-07-09-11-38-11.png,  class, 80%,80% %}

&emsp;&emsp;如果APortal.PowerShell安装完成，则上面的命令行执行后将列出系统中已经安装的APortal.PowerShell版本，如果多次安装可能会有多个版本存在，系统默认使用最新版本（版本号最大）。

## 使用 APortal 管理工具

{%note info%}
安装好 `APortal.PowerShell` 模块后，就可以使用模块包中提供的命令对网站进行设置 APortal。下面介绍 APortal.PowerShell 模块中包含的可用命令。
{%endnote%}

### Set-APortalWeb
{%note info%}
这是 `APortal.PowerShell` 模块中提供的最主要命令，用于设置SharePoint Online网站的 APortal 功能，会在用户输入的网站地址对应的网站上推送列表，网站资源，列表数据等一系列的网站数据。
{%endnote%}

1. 输入命令

    ```powershell
    # 国际网站
    Set-APortalWeb https://yourtenantname.sharepoint.com/sites/web/subweb
    # 世纪互联网站
    Set-APortalWeb https://yourtenantname.sharepoint.cn/sites/web/subweb

    # 为了提升安装速度，APortal.Powershell 安装资源包国内外分别存放了全量资源包，
    # 根据当前网络环境用户可以选择安装时使用国内还是海外资源包。
    # 不使用Globle 参数默认使用国内资源包。
    # 以下是选择海外资源包的命令：
    Set-APortalWeb https://yourtenantname.sharepoint.com/sites/web/subweb -Globle

    ```

2. 在弹出的身份认证窗口中输入网站管理员身份信息
{% fullimg images/media/15779286287197/15779316086252.jpg,  class, 80%,80% %}

1. 确认管理员身份后命令开始执行，直到推送结束
{% fullimg images/media/15779286287197/15779323142997.jpg,  class, 80%,80% %}

