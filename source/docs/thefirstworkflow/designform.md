---
title: 设计表单
date: 2020-07-09 13:27:32
---

&emsp;&emsp;打开APortal表单设计器，访问地址为：
{% note info%}
    站点URL/designer/designer.aspx
{%endnote%}
&emsp;&emsp;在表单设计器中选择刚创建的列表：SS_Expense，在左侧将出现APortal默认安装包含的名为Expense的表单，点击该表单名称后在右侧显示已经配置好的表单设计页面，如下图：
{% fullimg images/aportal-2020-07-10-12-44-14.png,  class, 80%,80% %}

&emsp;&emsp;点击 {% label primary@表单属性%} 按钮，查看表单属性：
{% fullimg images/aportal-2020-07-10-12-45-55.png,  class, 80%,80% %}

* FormId – 表单ID，该ID在系统中必须唯一，用于和工作流进行关联；建议使用相关的工作流类型ID作为后缀；
* isWorkflowForm – 标记该表单是否和工作流关联，如果设置为否，则表单页面上将不能选择工作流字段；
* Width – 表单宽度，可以设置百分比（%）或绝对宽度（以px为单位）；
* autoClose – 设置页面提示信息的自动关闭时间，以毫秒为单位，默认值为5秒（5000）；
* position – 设置页面提示信息的出现位置；
* Global Js – 显示系统默认提供的通用脚本，表单自定义代码可引用该脚本。

&emsp;&emsp;审批控件，用于工作流审批操作：
{% fullimg images/aportal-2020-07-10-12-47-40.png,  class, 80%,80% %}

&emsp;&emsp;费用报销标签，包含工作流字段和表单信息： 
{% fullimg images/aportal-2020-07-10-12-48-14.png,  class, 80%,80% %}

&emsp;&emsp;工作流信息在单据提交后自动生成，包含下列字段：
* 工作流编号
* 申请人
* 提交时间
* 申请进度

&emsp;&emsp;表单信息，包含下列字段：
* 标题 – 对应Title字段
* 备注 – 对应Remark字段
* 附件 – 对应SSF_Attachment_1字段
{% fullimg images/aportal-2020-07-10-12-49-28.png,  class, 80%,80% %}

&emsp;&emsp;费用明细标签，包含下列内容：
* 费用明细列表，用于保存具体的费用信息；
* 费用明细表单，包含标题、费用类型、费用日期、金额、费用说明等，如下图所示：
{% fullimg images/aportal-2020-07-10-12-50-45.png,  class, 80%,80% %}
* 金额 – 明细表单的金额合计值，使用页面脚本代码实现；
* 大写金额 – 金额转为中文大写，使用页面脚本代码实现；

&emsp;&emsp;审批历史，在已提交的流程单据上显示单据提交后到目前为止的审批节点、审批用户以及相关的开始、结束时间和审核操作，审核意见，审批人员上传的附件（如果有）等信息，如下图：
{% fullimg images/aportal-2020-07-10-12-51-30.png,  class, 80%,80% %}

&emsp;&emsp;表单设计、调整完成后，点击『保存表单』按钮，当页面上方出现保存表单表单成功的提示信息时，表示表单设计已经保存。
{% fullimg images/aportal-2020-07-10-12-52-03.png,  class, 50%,50% %}