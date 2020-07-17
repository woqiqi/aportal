---
title: 工作流中心
date: 2020-03-28 14:28:17
---

{% note info%}
    APortal系统默认的工作流中心页面可以从下面的地址访问：网站URL/sitepages/workflowcenterhome.aspx 。
{%endnote%}

## 标题

&emsp;&emsp;工作流中心页面的标题部分包括左上角的企业图标和文字标题。其中企业图标存储在这个目录下：网站URL/siteassets/img，图片文件名为：”logo white.png”。可以根据需要使用企业图标替换 该文件。图片尺寸建议为：200（宽）x 50（高），透明背景。
&emsp;&emsp;文字标题为SharePoint网站的标题，可以在SharePoint网站设置页面中进行编辑。

## 菜单和个人信息

&emsp;&emsp;右上角为系统菜单，菜单信息存储在/Lists/SSF_Menu列表中。系统创建时，默认导入的菜单包括：

* **首页**
* **系统设置**
    {% note info%}
        * 流程设计
        * 组织结构设计
        * 表单设计
        * 系统管理
        * 网站设置
    {%endnote%}

&emsp;&emsp;管理员可以在/Lists/SSF_Menu列表中根据实际业务需要对菜单进行添加和修改。
{% fullimg images/aportal-2020-04-02-10-12-40.png,  class, 80%,80% %}

* **标题/中文/英文**
    {% note info%}
        菜单标题，中英文标题在多语言环境下显示。
    {%endnote%}
* **Url**
    {% note info%}
        菜单链接，可以填入相对路径或绝对路径；相对路径相对于SharePoint Online网站根站点，通常是：https://yourcompany.sharepoint.com 。
    {%endnote%}
* **Display Order**
    {% note info%}
        显示顺序。
    {%endnote%}
* **Parent Menu**
    {% note info%}
        上级菜单，系统可支持两级菜单选择。
    {%endnote%}
* **Open in new window**
    {% note info%}
        是否在新窗口/标签页打开该链接。
    {%endnote%}

{% note danger%}
    注：如果不希望将系统管理菜单公开给所有用户，通常可以使用SharePoint权限设置，将SSF_Menu中的相关条目的权限删除，仅网站集/网站管理员可见，或授权给特定的SharePoint用户组。
{%endnote%}

&emsp;&emsp;通过点击页面右上角用户图标，在弹出层中将显示当前用户个人信息，包括用户的姓名，电子邮件，电话号码，职位名称，所属部门等。
{% fullimg images/aportal-2020-04-02-10-16-42.png,  class, 50%,50% %}
&emsp;&emsp;在个人信息弹出层中，用户可以从“简体中文/English”中选择自己需要的界面语言。点击“代理设置”可以设置工作流任务代理，参照《工作流中心/工作流任务代理》的说明。

## 导航栏

&emsp;&emsp;工作流中心左侧导航栏包含3个区域：

* 待办任务
* 我的申请
* 可用工作流

{% fullimg images/aportal-2020-04-02-10-18-55.png,  class, 50%,50% %}

&emsp;&emsp;任务待办包含2个列表，分别是“待处理”和“已处理”。“待处理”是指需要当前用户审批的工作流任务，任务由工作流引擎根据流程进行创建和分发，用户在任务列表中可以看到自己的任务，点击链接可以打开任务进行处理。处理完成的任务可以到“已处理”列表中查询。
&emsp;&emsp;我的申请是指当前用户填写发起的所有流程单据，包含3个列表，分别是“草稿”、“进行中”和“已完成”。用户填写后没有提交，在表单上点击保存的单据，将出现在“草稿”列表中。用户可以从草稿列表找到已经填写的单据继续填写并提交，也可以删除草稿。提交后流程还未完成的单据显示在“进行中”列表下。流程已完成或终止的单据显示在“已完成”列表下。
&emsp;&emsp;系统管理员可以通过在系统参数（/Lists/SSF_Parameters）设置下面的参数控制是否在工作流中心页面的导航栏区域显示“任务待办”和“我的申请”。

&emsp;&emsp;可设置参数如下：

* SSF_ShowTask
    {% note success%}
        控制是否显示“任务待办”。
        * 参数类别： 系统参数（值=1）
        * 参数值类型： 是/否（值=5）
    {%endnote%}
* SSF_ShowApplication
    {% note success%}
        控制是否显示“我的申请”。
        * 参数类别： 系统参数（值=1）
        * 参数值类型： 是/否（值=5
    {%endnote%}

&emsp;&emsp;在“任务待办”和“我的申请”下方，根据当前系统中的工作流权限设置，显示当前用户有权限查看和发起的所有流程类别和流程。

## 单据列表

&emsp;&emsp;**任务待办/待处理列**表根据SSW_Workflow列表的SSPending视图和SSW_WorkflowTask列表的SSPending视图结合的视图显示。在SSW_Workflow.WorkflowNumber字段下显示可打开工作流表单的超链接。
{% fullimg images/aportal-2020-04-02-10-30-43.png,  class, 80%,80% %}
&emsp;&emsp;**任务待办/已处理列表**根据SSW_Workflow列表的SSProcessed视图和SSW_WorkflowTask列表的SSProcessed视图结合的视图显示。在SSW_Workflow.WorkflowNumber字段下显示可打开工作流表单的超链接。
{% fullimg images/aportal-2020-04-02-10-31-39.png,  class, 80%,80% %}
&emsp;&emsp;**我的申请/草稿列表**显示的是SSW_Workflow列表的SSDraft视图，在SSW_Workflow.WorkflowNumber字段下显示可打开工作流表单的超链接。
{% fullimg images/aportal-2020-04-02-10-32-30.png,  class, 80%,80% %}
&emsp;&emsp;**我的申请/进行中列表**显示的是SSW_Workflow列表的SSUnfinished视图，在SSW_Workflow.WorkflowNumber字段下显示可打开工作流表单的超链接。
{% fullimg images/aportal-2020-04-02-10-33-03.png,  class, 80%,80% %}
&emsp;&emsp;**我的申请/已完成列表**显示的是SSW_Workflow列表的SSFinished视图，在SSW_Workflow.WorkflowNumber字段下显示可打开工作流表单的超链接。
{% fullimg images/aportal-2020-04-02-10-34-13.png,  class, 80%,80% %}
&emsp;&emsp;工作流中心的单据列表中根据工作流设计器中设计的工作流或自定义列表显示相应的列表内容。

## 工作流任务委派

&emsp;&emsp;在“任务待办/待处理”列表中，用户可以将未完成的任务委派给其他用户完成。进入列表后，选择需要委派的任务（1次只允许选择1行），点击列表上方的『委派』按钮，在弹出的任务委派窗口中选择被委派的用户后，点击『保存』按钮完成委派。一个任务可以同时委派给多个用户，被委派的用户处理该任务在系统中等同于原用户处理了该任务。
&emsp;&emsp;委派完成后，原任务从当前用户的待处理任务列表中消失，系统将重新生成任务并分配给被委派的一个或多个用户。
{% fullimg images/aportal-2020-04-02-10-39-21.png,  class, 80%,80% %}

## 工作流任务代理

&emsp;&emsp;使用工作流任务代理功能，是的用户可以将系统分配给自己的工作流任务，在指定的时间范围内自动分配给其他的指定用户。
&emsp;&emsp;在工作流中心页面右上角点击用户图标，在弹出页面中选择“代理设置”，在弹出窗口中设置工作流任务代理。

* **用户**
    {% note success%}
        默认为当前用户，不可修改。
    {%endnote%}
* **代理用户**
    {% note success%}
         选择需要将任务委派到的目标用户，可以多选。
    {%endnote%}
* **开始日期**
    {% note success%}
         选择代理开始的日期，从该日期的0点开始生效。
    {%endnote%}
* **结束日期**
    {% note success%}
        选择代理结束的日期，到该日期的0点截止失效。
    {%endnote%}
* **工作流类型**
    {% note success%}
        选择需要进行自动委派的工作流类型。
    {%endnote%}
* **备注**
    {% note success%}
        文字说明。
    {%endnote%}

{% fullimg images/aportal-2020-04-02-10-41-40.png,  class, 80%,80% %}