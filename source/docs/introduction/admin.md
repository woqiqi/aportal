---
title: 系统管理
date: 2020-03-28 16:28:17
---

## 系统管理中心

&emsp;&emsp;APortal提供系统管理中心页面供管理用户对系统中的数据进行管理，管理中心页面访问地址为：网站URL/SitePages/admincenter.rest.aspx 。
{% fullimg images/aportal-2020-04-02-13-16-54.png,  class, 80%,80% %}
&emsp;&emsp;管理员用户可以通过管理中心页面对当前网站下的列表数据执行检索、新增、编辑、删除、导入、导出等操作。要对列表数据执行操作，首先需要在SSF_Admin列表中进行登记。通过点击左侧导航栏中的“Admin Menu”选项可打开SSF_Admin列表。在SSF_Admin列表中创建或编辑已有记录。

* **Title**
    {% note success%}
        在左侧导航栏中显示的标题信息。
    {%endnote%}
* **Parent**
    {% note success%}
        上级导航栏，支持两级导航栏。
    {%endnote%}
* **Menu URL**
    {% note success%}
         以”#/listdetail/”开头，后面拼接“{1}/{2}/{3}/{4}/{5}/{6}/{7}”的字符串，用于设置需要管理的列表的显示和管理功能。
         
        * {1} – 列表名称。
        * {2} – 设置1或0代表是否支持在管理中心页面对该列表进行导出导入的操作。
        * {3} – 如果需要执行数据导入，用来判断数据唯一性的关键字段名，如果多个字段名以“,”分隔。
        * {4} – 系统保留，空白。
        * {5} – 列表显示视图，默认为ssadmin。
        * {6} – 在列表中新建、编辑记录使用的表单视图，默认为ssadmindata。
        * {7} – 导出导入使用的列表视图，默认为SSExportView。
    {%endnote%}
* **Display Order**
    {% note success%}
        设置当前管理的记录在左侧导航栏中的同级别下的显示顺序。
    {%endnote%}

&emsp;&emsp;创建或编辑完成后，保存记录并刷新管理中心页面，新建的记录将显示在管理中心页面左侧导航栏中。

## 系统参数设置

&emsp;&emsp;APortal系统参数存储在/Lists/SSF_Parameters列表中，在系统初始化时包含下列参数。

* **SSF_CurrentVersion**
    {% note success%}
        控制所有客户端的浏览器缓存；工作流中心的左侧导航栏，标题部分的菜单，以及数据列表使用的用户试图，都是缓存在客户端浏览器中的。
        如果上述信息发生了修改，则需要将这个参数值修改为新的值。客户端浏览器打开系统页面时将加载新的缓存数据。

        * 参数类别： 系统参数（值=1）。
        * 参数值类型： 单行文本（值=2）。
    {%endnote%}
* **SSF_DateOnlyFormat**
    {% note success%}
        单据列表中显示的日期格式，默认值为：YYYY/MM/DD。

        * 参数类别： 系统参数（值=1）。
        * 参数值类型： 单行文本（值=2）。
    {%endnote%}
* **SSF_DateTimeFormat**
    {% note success%}
        单据列表中显示的日期+时间格式，默认值为：YYYY/MM/DD HH:mm。

        * 参数类别： 系统参数（值=1）。
        * 参数值类型： 单行文本（值=2）。
    {%endnote%}

## 系统邮件模板设置

&emsp;&emsp;邮件模板分为邮件标题和邮件内容两部分的模板，其中邮件标题仅支持纯文本格式的模板，邮件内容则采用HTML格式进行模板的设置。
&emsp;&emsp;邮件标题模板在系统中使用单行文本格式保存，最多不应超过255个字符。邮件内容则采用多行文本格式保存，内容长度没有限制。
&emsp;&emsp;在邮件模板的定义中，除了可以使用固定文字以外，还可以使用下列格式的动态参数，在流程实际流转时从流程或业务单据获取相应的信息替换为实际的邮件或短信内容。
&emsp;&emsp;流程将在启动节点（仅限第二次进入启动节点），审批处理和审阅处理节点上发送电子邮件和短信通知。在节点上发送通知时，首先获取节点上设置的相关模板内容，如果节点上没有配置，则获取系统参数列表（『SSF_Parameters』）中设置的相应模板内容。系统参数列表中设置的相应模板的参数名称和类型如下：

* SSW_ApprovalEmailSubject
    {% note success%}
        邮件标题模板。

        * 参数类别： 系统参数（值=1）。
        * 参数值类型： 单行文本（值=2）。
    {%endnote%}
* SSW_ApprovalEmailBody
    {% note success%}
        邮件内容模板。

        * 参数类别： 系统参数（值=1）。
        * 参数值类型： 多行文本（值=3）。
    {%endnote%}

&emsp;&emsp;在流程设计器中可以在工作流版本或工作流节点处设置系统发送的提醒邮件模板。工作流节点属性里设置的邮件模板优先级高于工作流版本属性里设置的。也就是说如果需要发送提醒邮件，系统将首先判断需要发送提醒邮件的节点上是否设置了邮件模板，如果没有再去看工作流版本是否设置了提醒邮件模板。如果都没有设置，则去系统参数里获取SSW_ApprovalEmaiSubject和SSW_ApprovalEmailBody作为提醒邮件的模板。
&emsp;&emsp;在工作流版本或工作流节点上设置提醒邮件模板有2种方式，一种是直接在邮件标题和邮件内容里写入模板内容。另一种则以：“SSW_EmailTemplate:邮件标题/内容参数名”的形式，分别写入邮件标题和邮件内容。邮件标题/内容参数则需要在系统参数表里进行定义，参数类别和参数值类别分别是“1，2”和“1，3”。
&emsp;&emsp;在模板中可使用的获取流程运行时上下文信息内容的语法如下：

* **{Context:SSWF.工作流列表字段名称}**
    {% note success%}
        从工作流上下文信息中获取相应的内容，例如：{Context:SSWF.Applicant}代表工作流申请人。
    {%endnote%}
* **{Context:业务列表字段名称}**
    {% note success%}
        从流程相关的业务单据中获取相应的内容，例如：{Context:Title}代表业务单据的Title字段内容。
    {%endnote%}
* **{Context:SSW.WebUrl}**
    {% note success%}
        代表当前系统的根网站Web链接。
    {%endnote%}
* **{Context:SSWF.查阅项字段.查阅项字段属性}**
    {% note success%}
        代表工作流信息中的查阅项字段相关的列表属性，例如：{Context:SSWF.Applicant.EnglishName}代表申请人的英文姓名。
    {%endnote%}
* **{Context:查阅项字段.查阅项字段属性}**
    {% note success%}
        代表业务单据信息中的查阅项字段相关的列表属性，例如：{Context:Vendor.Title}代表业务单据中的供应商名称。
    {%endnote%}

### 电子邮件模板样例

#### 发送给审批用户

&emsp;&emsp;在流程中发送给审批用户的电子邮件模板样例：

* **标题**
    ```text
    工作流任务通知 / Workflow Task Reminder: {Context:SSWF.WorkflowCategory}, {Context:SSWF.Applicant.Title} ({Context:SSWF.WorkflowNumber})
    ```
* **内容**
    ```html
        <font style="font-family:'Microsoft YaHei', Tahoma; font-size: small;">
            您好，{Context:SSWFT.Approver.Title}，
            <br /><br />
            有一条工作流任务正在等待您的处理。
        </font>
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size:small;" width='80%'>
            <tr>
                <td style="width:10px"></td>
                <td style="width:100px"><b>申请人：</b></td>
                <td>{Context:SSWF.Applicant.Title} </td>
            </tr>
            <tr>
                <td></td>
                <td><b>申请时间：</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>申请类别：</b></td>
                <td>{Context:SSWF.WorkflowCategory.Title}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>单据编号：</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>主题</b>：</td>
                <td>{Context:Title}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>请点击<a href='{Context:SSW.WebUrl}'>这里</a>进入工作流系统处理。</td>
            </tr>
        </table>
        <br />
        <hr><br />
        Dear {Context:SSWFT.Approver.Title},
        <br /><br />
        There is a pending task in workflow system waiting for your process.
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size:small;">
            <tr>
                <td style="width:10px"></td>
                <td style="width:100px"><b>Applicant</b></td>
                <td>{Context:SSWF.Applicant.Title} </td>
            </tr>
            <tr>
                <td></td>
                <td><b>Submit Time</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Category</b></td>
                <td>{Context:SSWF.WorkflowCategory.Title}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Application No.</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>Subject</b></td>
                <td>{Context:Title}</td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>You may access workflow system by click <a href='{Context:SSW.WebUrl}'>here</a>.</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
        </table>
    ```

#### 申请被拒绝退回给申请人

&emsp;&emsp;申请被拒绝并退回给流程发起人时，系统发送给申请人使用的邮件通知模板样例：

* **标题**
    ```text
        申请被拒绝 / Application Rejected: {Context:SSWF.WorkflowCategory}, {Context:SSWF.Applicant.Title} ({Context:SSWF.WorkflowNumber})
    ```
* **内容**
    ```html
        <font style="font-family:'Microsoft YaHei', Tahoma; font-size: small;">
            您好，{Context:SSWFT.Approver.Title}，
            <br />
            <br />
            您的单据在审批过程中被拒绝并退回。
        </font>
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size: small;" width="80%">
            <tr>
                <td style="width:10px"></td>
                <td style="width:100px"><b>申请时间：</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>申请类别：</b></td>
                <td>{Context:SSWF.WorkflowCategory.Title}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>单据编号：</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>主题</b>：</td>
                <td>{Context:Title}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>请点击<a href='{Context:SSW.WebUrl}'>这里</a>进入工作流系统处理。</td>
            </tr>
        </table>
        <br />
        <hr><br />
        Dear {Context:SSWFT.Approver.Title},
        <br />
        <br />
        Your application has been rejected and returned.
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size: small;" width="80%">
            <tr>
                <td style="width:10px"></td>
                <td style="width:100px"><b>Submit Time</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Category</b></td>
                <td>{Context:SSWF.WorkflowCategory.Title}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Application No.</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>Subject</b></td>
                <td>{Context:Title}</td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>You may access workflow system by click <a href='{Context: SSW.WebUrl }'>here</a>.</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
        </table>
    ```

#### 审批完成发给申请人

&emsp;&emsp;审批完成后给申请人发送的通知邮件模板样例：

* **标题**
    ```text
        申请已通过 / Application Approved: {Context:SSWF.WorkflowCategory}, {Context:SSWF.Applicant.Title} ({Context:SSWF.WorkflowNumber})
    ```
* **内容**
    ```html
        <font style="font-family:'Microsoft YaHei', Tahoma; font-size: small;">
            您好，{Context:SSWF.Applicant.Title}，
            <br />
            <br />
            您的申请已经审批通过。
        </font>
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size: small;" width="80%">
            <tr>
                <td style="width:10px;"></td>
                <td style="width:100px;"><b>申请时间：</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>申请类别：</b></td>
                <td>{Context:SSWF.WorkflowCategory}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>单据编号：</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>主题</b>：</td>
                <td>{Context:Title}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>请点击<a href='{Context: SSW.WebUrl}'>这里</a>进入工作流系统查看详细信息。</td>
            </tr>
        </table>
        <br />
        <hr><br />
        Dear { Context:SSWF.Applicant.Title},
        <br />
        <br />
        Your application has been approved.
        <table border='0' style="font-family:'Microsoft YaHei', Tahoma; font-size: small;" width="80%">
            <tr>
                <td style="width:10px;"></td>
                <td style="width:100px;"><b>Submit Time</b></td>
                <td>{Context:SSWF.SubmitTime}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Category</b></td>
                <td>{Context:SSWF.WorkflowCategory}</td>
            </tr>
            <tr>
                <td></td>
                <td><b>Application No.</b></td>
                <td>{Context:SSWF.WorkflowNumber} </td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><b>Subject</b></td>
                <td>{Context:Title}</td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>

            <tr>
                <td></td>
                <td colspan='2'>You may access workflow system by click <a href='{Context: SSW.WebUrl }'>here</a>.</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>&nbsp;</td>
                <td></td>
            </tr>
        </table>

    ```

## 电子邮件审批设置

&emsp;&emsp;电子邮件审批，是指审批用户通过直接回复系统发送的审批提醒邮件，在回复邮件的第一行写入代表同意或拒绝的关键字，以完成审批操作的过程。
&emsp;&emsp;要实现电子邮件审批，需要在系统中做如下的设置：

* 传入邮件设置，也即将发送提醒邮件的邮箱配置为可以允许系统收取该邮箱的邮件。系统可接受的账户类型包括IMAP和POP，设置方式参照下图所示：
    {% fullimg images/aportal-2020-04-02-13-57-25.png,  class, 80%,80% %}
    {% fullimg images/aportal-2020-04-02-13-58-20.png,  class, 80%,80% %}
    {% note danger%}
        注：传入邮件设置在工作流引擎程序中设置。工作流引擎可以由水杉提供的云机托管，或用户自行运营云机托管。
    {%endnote%}
* 在审批节点上将“允许邮件审批”设置为“是”。
    {% note info%}
        系统默认支持的关键字包括：
        * 代表同意的关键字： 同意，好，Agree，Yes，OK。
        * 代表拒绝的关键字： 拒绝，不同意，Reject，No，Disagree。

        系统还支持自定义的同意或拒绝的关键字，分别使用下面两个系统参数进行定义，多个关键字使用竖线或逗号或分号进行（|,;）分隔。

        * SSW_AgreedKeys： 自定义同意关键字
          * 参数类别： 系统参数（值=1）。
          * 参数值类型： 多行文本（值=3）。
        * SSW_DisagreedKeys： 自定义拒绝关键字
          * 参数类别： 系统参数（值=1）。
          * 参数值类型： 多行文本（值=3）。
    {%endnote%}

## 逻辑公式设置

### 变量和常量

#### 引用工作流变量

{% note info%}
    $VAR.流程变量名称（或系统常量名称）。
{%endnote%}

#### 引用业务单据主表字段

{% note info%}
    $SYW.字段名称（必须是字段Internal Name）。
{%endnote%}

#### 引用流程字段

{% note info%}
    $SSW.字段名称（必须是字段Internal Name）。
{%endnote%}

#### 级联引用查阅项字段引用列表包含的其他字段

{% note info%}
    $SYW.查阅项字段名.查阅列表的其他字段，如果引用的“查阅列表的其他字段”也是查阅项，则可以根据同样规则继续以”.”的方式进一步引用该查阅项字段引用列表的其他字段，以此类推。
{%endnote%}

#### 引用上下文变量

{% note info%}
    $CON，可以通过变量上下文变量进一步引用下列变量：
{%endnote%}

* **$CON.Applicant.AllRoles**
    {% note success%}
        当前流程申请人的所有角色。
    {%endnote%}
* **$CON.Applicant.Roles**
    {% note success%}
        当前流程申请人在当前流程的部门（或Department0，如果设置了）的所有角色。
    {%endnote%}
* **$CON.Applicant.UpRoles**
    {% note success%}
        当前流程申请人在当前流程的部门（或Department0，如果设置了）的向上相对角色。
    {%endnote%}
* **$CON.LastApprover.AllRoles**
    {% note success%}
        当前流程最近审批人的所有角色。
    {%endnote%}
* **$CON.LastApprover.Roles**
    {% note success%}
        当前流程最近审批人在当前流程的部门（或Department0，如果设置了）的所有角色。
    {%endnote%}
* **$CON.LastApprover.UpRoles**
    {% note success%}
        当前流程最近审批人在当前流程的部门（或Department0，如果设置了）的向上相对角色。
    {%endnote%}
* **$CON.Creator.AllRoles**
    {% note success%}
        当前流程创建人的所有角色。
    {%endnote%}
* **$CON.Creator.Roles**
    {% note success%}
        当前流程创建人在当前流程的部门（或Department0，如果设置了）的所有角色。
    {%endnote%}
* **$CON.Creator.UpRoles**
    {% note success%}
        当前流程创建人在当前流程的部门（或Department0，如果设置了）的向上相对角色。
    {%endnote%}
* **$CON.Department.Roles**
    {% note success%}
        当前流程的部门（或Department0，如果设置了）的所有角色。
    {%endnote%}
* **$CON.Department.UpRoles**
    {% note success%}
        当前流程的部门 （或Department0，如果设置了）的所有向上角色。
    {%endnote%}

#### 日期时间变量

  * **$DTC.Today**
    {% note success%}
        当天日期对应的ticks值。
    {%endnote%}
  * **$DTC.Now**
    {% note success%}
        当时日期时间对应的ticks值。
    {%endnote%}
  * **$DTC.Year**
    {% note success%}
        当时时间对应的年份。
    {%endnote%}
  * **$DTC.Month**
    {% note success%}
        当时时间对应的月份。
    {%endnote%}
  * **$DTC.Day**
    {% note success%}
        当时时间对应的日。
    {%endnote%}
  * **$DTC.Hour**
    {% note success%}
        当时时间对应的小时。
    {%endnote%}
  * **$DTC.Minute**
    {% note success%}
        当时时间对应的分钟。
    {%endnote%}
  * **$DTC.Second**
    {% note success%}
        当时时间对应的秒。
    {%endnote%}
    {% note danger%}
        注：ticks值代0001年1月1日午夜12:00以来所经过时间以 100 毫微秒为间隔表示时的数字
    {%endnote%}

#### 常量

  * **文本类型**
    {% note success%}
        使用半角双引号包含，例如：“文本1”。
    {%endnote%}
  * **数字类型**
    {% note success%}
        直接写数字，例如：88。
    {%endnote%}
  * **日期类型**
    {% note success%}
        以yyyy-MM-dd的格式书写，例如：2015-01-01。
    {%endnote%}
  * **是否类型**
    {% note success%}
        True，False。
    {%endnote%}

### 逻辑计算符

<table style="width: 90%; border: 2px solid rgba(119,131,143,.1);">
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">==</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">等于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于相同类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">!=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">不等于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于相同类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">></td>
    <td style="border: 2px solid rgba(119,131,143,.1);">大于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于数字类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">>=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">大于等于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于数字类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);"><</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">小于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于数字类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">&lt;=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">小于等于</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">用于数字类型的变量或常量之间的比较</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">like</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">包含</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">判断左侧字符串变量或常量是否包含右侧的字符串变量或常量</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">notlike</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">不包含</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">判断左侧字符串变量或常量是否不包含右侧的字符串变量或常量</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">startwith</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">以…开始</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">判断左侧字符串变量或常量是否是否以右侧的字符串变量或常量开头</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">endwith</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">以…结尾</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">判断左侧字符串变量或常量是否是否以右侧的字符串变量或常量结尾</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">!</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">逻辑非</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">对右侧的逻辑判断公式或逻辑类型变量或常量进行否定操作</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">&&</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">逻辑与</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">连接逻辑判断公式或逻辑类型的变量或常量，进行与操作</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">||</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">逻辑或</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">连接逻辑判断公式或逻辑类型的变量或常量，进行或操作</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">()</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">括号</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">可以将多个逻辑判断公式使用多层括号加上逻辑非、逻辑与、逻辑或操作进行关联</td>
</tr>
</table>

### 特殊符号

<table style="width: 90%; border: 2px solid rgba(119,131,143,.1);">
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">&</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;amp;</CDATA></td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">(</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;lbrackets;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">)</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;rbrackets;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">></td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;gt;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);"><</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;lt;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">>=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;geq;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">&lt;=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;leq;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">=</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;eq;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">!</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;em;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">|</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;vline;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">/</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;slash;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">\</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;backslash;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">"</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;quot;</td>
</tr>
<tr>
    <td style="border: 2px solid rgba(119,131,143,.1);">空格</td>
    <td style="border: 2px solid rgba(119,131,143,.1);">&amp;nbsp;</td>
</tr>
</table>

### 常见示例

1. 是否变量和常量的比较
   ```csharp
        $VAR.是否变量_1 == True
   ```
2. 文本变量和常量比较
   ```csharp
        $VAR.文本变量_1 == “我是一个常量”
   ```
3. 文本变量和包含特殊字符的常量（包含一个空格）比较
   ```csharp
        $VAR.文本变量_1 == “我是一个&nbsp;常量”
   ```
4. 数字变量和常量比较
   ```csharp
        $VAR.数字变量_1 >= 2000
   ```
5. 判断文本变量是否包含一个字符串
   ```csharp
        $VAR.文本变量_1 like “abc”
   ```
6. 判断文本变量是否不包含一个字符串
   ```csharp
        $VAR.文本变量_1 notlike “abc”
   ```
7. 判断文本变量是否以一个字符串开始
   ```csharp
        $VAR.文本变量_1 startwith “abc”
   ```
8. 返回一个逻辑变量（是否类型）的否定值
   ```csharp
        !$VAR.是否变量_1
   ```
9.  多个逻辑判断公式连接
   ```csharp
        (($VAR.是否变量_1 == True) && ($VAR.文本变量_1 == “我是一个常量”)) || ($VAR.数字变量_1 >= 2000)
   ```
10. 业务列表查阅项为空判断
   ```csharp
        $SYW.字段名称 == “null”
   ```
11. 查阅字段的级联表达式
   ```csharp
        $SSW.Department2.DepartmentType=="管理中心"
   ```
12. $CON.Roles 表示当前申请人的所有角色，UpRoles表示向上相对角色,LastApprover.Roles 表示最后审批人的所有角色，LastApprover.UpRoles 表示最后审批人的向上相对角色
   ```csharp
        $CON.Roles like "部门主管" && $CON.UpRoles like "ABC" && $CON.LastApprover.Roles like "部门主管" && $CON.LastApprover.UpRoles like "ABCD"
   ```

## 多语言设置

&emsp;&emsp;APortal工作流系统默认可支持简体中文和英文两种界面语言。界面语言对应的信息存储在网站列表：/Lists/SSF_Resource中。
&emsp;&emsp;如果在系统中创建了新的业务列表，并且希望能以多语言形式在工作流中心的单据列表和表单上显示时，可以将自定义的资源文件信息写入/Lists/SSF_Resource，写入格式如下：

* **标题**
    {% note success%}
        列表名称，例如：SS_Form。
    {%endnote%}
* **ModuleID**
    {% note success%}
        列表Url（由”/Lists/”+列表名构成），例如：/Lists/SS_Form。
    {%endnote%}
* **ResourceKey**
    {% note success%}
        字段定义名称（Internal Name）。
    {%endnote%}
* **Res_2052**
    {% note success%}
        中文状态下显示名。
    {%endnote%}
* **Res_1033**
    {% note success%}
        英文状态下显示名。
    {%endnote%}

&emsp;&emsp;资源文件信息写入并保存后，刷新相关的列表或表单页面，就可以看到新定义的相应语言状态下的显示名。