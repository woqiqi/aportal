---
title: 创建列表
date: 2020-07-09 13:27:32
---

&emsp;&emsp;首先需根据实际业务需求在SharePoint站点中创建数据列表，用于关联表单存储业务数据。以企业中最常见的费用报销流程为例，在APortal安装过程中已经默认在站点中创建了一个名字为SS_Expense的列表，包含下列字段信息：

<table style="width: 100%; border: 2px solid rgba(119,131,143,.1); margin-bottom: 20px;">
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>字段名称</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1); width: 20%;"><b>字段类型</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>字段属性</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>说明</b></td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Title</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销单据的标题</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Amount</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">数字</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">2位小数</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销单据的合计金额</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">AmountInChinese</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销合计金额的中文大写</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Remark</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">多行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">纯文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">输入对于报销单据的说明信息</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSF_Attachment_1</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">多行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">纯文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销单据附件文档</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_WorkflowNumber</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单据编号</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_Applicant_Text</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_CurrentStatus_Text</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单据状态文本值</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_CurrentStatus</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单值查阅项</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSF_ApplicationStatus</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单据状态</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_Department_Text</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单据所属的部门名称</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_WorkflowCategory_Text</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单据类型</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_SubmitTime</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">日期+时间</td>
        <td style="border: 2px solid rgba(119,131,143,.1);"></td>
        <td style="border: 2px solid rgba(119,131,143,.1);">保存单据提交时间</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSOwner</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单值查阅项</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSO_User</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">创建单据的用户</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_Viewer</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">多值查阅项</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSO_User</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">所有对单据拥有查看权限的用户</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_Workflow_1002</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单值查阅项</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">SSW_Workflow</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">关联对应的流程数据，其中的『工作流类型ID』应使用实际的工作流类型ID取代。例如工作流类型ID为1002，则这个字段的名称就应设置为SSW_Workflow_1002</td>
    </tr>
</table>

&emsp;&emsp;接下来是SS_ExpenseDetail列表，用于存储相关的费用报销单据的明细信息，字段说明如下：
<table style="width: 100%; border: 2px solid rgba(119,131,143,.1); margin-bottom: 20px;">
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>字段名称</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1); width: 20%;"><b>字段类型</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>字段属性</b></td>
        <td style="border: 2px solid rgba(119,131,143,.1);"><b>说明</b></td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Title</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">255字符</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销明细标题</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">ExpenseDate</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">日期</td>
        <td style="border: 2px solid rgba(119,131,143,.1);"></td>
        <td style="border: 2px solid rgba(119,131,143,.1);">费用发生的日期</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">ExpenseType</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">选择</td>
        <td style="border: 2px solid rgba(119,131,143,.1);"></td>
        <td style="border: 2px solid rgba(119,131,143,.1);">根据实际业务确定选项，例如：误餐费，市内交通费，招待费，其他，等等…</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Amount</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">数字</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">2位小数</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销单据的明细金额</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">Description</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">多行文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">纯文本</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">报销明细说明</td>
    </tr>
    <tr>
        <td style="border: 2px solid rgba(119,131,143,.1);">S2_SS_Expense</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">单值查阅项</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">SS_Expense</td>
        <td style="border: 2px solid rgba(119,131,143,.1);">用于关联相应的费用报销单据主表，该字段由系统自动创建</td>
    </tr>
</table>

&emsp;&emsp;列表创建完成后，在列表中创建视图用于后续的表单设计和工作流中心展现。在SS_Expense列表上创建名称为：SSFormView_工作流类型ID的字段，例如工作流类型设置为1002，则视图名称为：SSFormView_1002，视图包含字段和顺序如下：
* SSW_WorkflowNumber
* SSW_Applicant_Text
* SSW_Department_Text
* SSW_SubmitTime
* SSW_CurrentStatus_Text
* Title
* Amount
* AmountInChinese
* Remark

&emsp;&emsp;在ExpenseDetail列表上创建名为SSFormView的视图，包含下列字段：
* Title
* ExpenseType
* ExpenseDate
* Amount
* Description
