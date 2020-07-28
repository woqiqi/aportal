---
title: 流程设计
date: 2020-01-03 14:28:17
---

&emsp;&emsp;水杉工作流以“工作流类别/工作流名/工作流版本”的基本结构进行管理。使用工作流类别将各种类型的工作流根据其业务用途、面向用户群或其他需要的属性进行分类。例如：员工自主服务流程、财务类流程、生产类流程、供应商管理类流程、采购管理类流程等。工作流名称是指具体实施的流程，从属于某个工作流类别。例如：个人费用报销流程，从属于员工自主服务流程类别。
&emsp;&emsp;在每个工作流下，可以创建和管理多个工作流版本，在任意时间一个工作流只能有一个有效的版本（或称之为“当前版本”）。新发起的流程实例提交时，将会引用当前流程下的有效版本进行流转，并在流程结束前一直保持使用同一个流程版本。

## 工作流类别

&emsp;&emsp;进入工作流设计器时，如果当前系统中还没有创建过任何工作流，则可以点击 {% label danger@+工作流分类%} 按钮开始创建第一个工作流类别。
{% fullimg images/aportal-2020-03-27-23-45-02.png,  class, 80%,80% %}
&emsp;&emsp;在工作流类别新增/编辑页面中，可以填写下列内容：

* **标题**
    {% note success%}
        工作流类别的名称。
    {%endnote%}
* **中文/英文/日文名称**
    {% note success%}
        在系统中选择相应语言作为界面语言时显示的名称。
    {%endnote%}
* **显示顺序**
    {% note success%}
        输入数字，用于控制在工作流中心页面中该工作流类别在左侧导航栏中显示的顺序（从上至下）。
    {%endnote%}

&emsp;&emsp;输入完成后，点击 {% label danger@保存%} 按钮保存当前输入的内容。
{% fullimg images/aportal-2020-03-27-23-45-27.png,  class, 30%,30% %}
&emsp;&emsp;保存成功后，页面左侧导航栏中将显示出新添加或修改的工作流类别，页面转入不可编辑状态。如果需要对已经存在的工作流类别进行修改，则从左侧导航栏选择该工作流类别并点击 {% label danger@编辑%} 按钮，进入编辑状态。
{% fullimg images/aportal-2020-03-27-23-45-49.png,  class, 80%,80% %}
&emsp;&emsp;选中工作流类别后，点击 {% label danger@删除%} 按钮可以将工作流类别从系统中删除。
{% note danger%}
    注：如果工作流类别下已经有工作流，则工作流类别不允许删除。
{%endnote%}
{% fullimg images/aportal-2020-03-27-23-46-15.png,  class, 80%,80% %}

## 工作流

&emsp;&emsp;在工作流设计器中选择工作流类别，点击 {% label danger@+新增/工作流%} 按钮，可以开始创建新的工作流。工作流信息分为3个主要区域：

* **基本信息**
* **权限设定**
    {% note success%}
        包括对于该工作流拥有读写权限的用户群设置。
    {%endnote%}
* **重定向设置**
    {% note success%}
        包括对于该工作流的链接属性设置。
    {%endnote%}

### 工作流基本信息

&emsp;&emsp;工作流基本信息包括：

* **标题**
    {% note success%}
        工作流名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的工作流标题。
    {%endnote%}
* **工作流类别**
    {% note success%}
        从现有的工作流类别列表中选择该工作流所属类别，这个选择决定了在工作流中心页面的左侧导航栏中，该工作流显示在那个类别下。
    {%endnote%}
* **显示顺序**
    {% note success%}
        输入数字，工作流中心页面根据该数字的顺序显示工作流。
    {%endnote%}
* **流程ID**
    {% note success%}
        在系统中唯一标识该工作流的ID，数字输入，在整个系统范围内唯一。
    {%endnote%}
* **当前版本**
    {% note success%}
        该工作流当前版本，这是一个只读字段，其包含的信息在工作流发布后自动更新，不允许填写
    {%endnote%}
* **SEQFormat**
    {% note success%}
        设置单据编号的格式，默认格式为"{0}-{1:D6}"。
    {%endnote%}
  * **{0}**
    {% note success%}
        SEQKey，单据编号关键字，格式设置参照下面的SEQKeyFormat。
    {%endnote%}
  * **{1}**
    {% note success%}
        流水号，D6表示6位流水号
    {%endnote%}
  * **{2}**
    {% note success%}
        公司查阅值，工作流列表上的Company字段值。
    {%endnote%}
  * **{3}**
    {% note success%}
        部门查阅值，工作流列表上的Department字段值。
    {%endnote%}
  * **{4}**
    {% note success%}
        申请人查阅值，工作流列表上的Applicant字段值。
    {%endnote%}
  * **{5:日期格式化字符串}**
    {% note success%}
        当前时间，在冒号后写日期时间格式化字符串，例如：yyyyMMddhhmmssfff
    {%endnote%}
* **SEQKeyFormat**
    {% note success%}
        设置单据编号关键字格式，如果不设置，则默认格式为"{0}-{1:yyyyMM}"。
    {%endnote%}
  * **{0}**
    {% note success%}
        工作流版本缩写。
    {%endnote%}
  * **{1}**
    {% note success%}
        当前时间，在冒号后写日期时间格式化字符串，例如：yyyyMMddhhmmssfff。
    {%endnote%}
* **备注**
    {% note success%}
        文本输入对该工作流的描述信息。
    {%endnote%}
{% fullimg images/aportal-2020-03-27-23-46-50.png,  class, 80%,80% %}

### 工作流权限设定

&emsp;&emsp;权限设定部分包含下列信息：

* **可编辑公司 (Edit Company)**
    {% note success%}
        选择可以对该流程拥有创建和编辑权限的公司；也即从属于该公司的用户对于该流程拥有创建和编辑权限。系统中仅支持唯一的公司，因此选择可编辑公司也即代表当前系统中所有用户都对于该流程拥有创建和编辑权限。
    {%endnote%}
  {% fullimg images/aportal-2020-03-27-23-47-17.png,  class, 80%,80% %}
* **可编辑部门 (Edit Department)**
    {% note success%}
        选择可以对该流程拥有创建和编辑权限的部门；也即从属于所选择部门的用户对于该流程拥有创建和编辑权限，可选择多个部门。
    {%endnote%}
  {% fullimg images/aportal-2020-03-27-23-47-41.png,  class, 80%,80% %}
* **可编辑角色 (Edit Role)**
    {% note success%}
        选择对于该流程拥有创建、编辑权限的角色，也即从属于被选择角色的用户对于流程拥有创建、编辑权限，可选择多个角色。
    {%endnote%}
  {% fullimg images/aportal-2020-03-27-23-48-18.png,  class, 80%,80% %}
* **可查看角色 (View Role)**
    {% note success%}
        选择对于该流程拥有查看权限的角色，也即从属于被选择角色的用户对于流程拥有查看权限，可选择多个角色；用户可查看的流程单据范围取决于流程本身的设置。
    {%endnote%}
* **可查看部门角色 (Department View Roles)**
    {% note success%}
        选择对于本部门流程拥有查看权限的角色，也即从属于被选择角色的用户对于属于其所属部门的当前流程类型拥有全部查看权限，可选择多个角色。
    {%endnote%}
* **可查看子部门角色 (Sub Department View Roles)**
    {% note success%}
        选择对于本部门及所有下属子部门的流程拥有查看权限的角色，也即从属于被选择角色的用户对于属于其所属部门及所有下属子部门的当前流程类型拥有全部查看权限，可选择多个角色。
    {%endnote%}
* **可查看公司角色 (Company View Roles)**
    {% note success%}
        选择对于当前流程类型拥有全部查看权限的角色，可多选。
    {%endnote%}
  {% fullimg images/aportal-2020-03-27-23-48-46.png,  class, 80%,80% %}

### 重定向设置

&emsp;&emsp;工作流重定向设置是指在工作流中心页面中的左侧导航栏中点击当前流程名称后，在系统中展现的列表属性或转向的链接地址的设置。
&emsp;&emsp;链接类型有3个选项，默认为“工作流列表”。选择工作流列表代表当前设置的是一个工作流相关的列表，此时“重定向URL（Redirect URL）”属性无效，不需要设置。
&emsp;&emsp;列表属性里包含下列属性可以设置：

* **DisplayView**
    {% note success%}
        用于和工作流相关的业务单据列表在工作流页面上显示的列表视图名称。
    {%endnote%}
* **ShowExportButton**
    {% note success%}
        用于控制在当前工作流页面上是否显示『导出（Export）』按钮，配置值为true或false。
    {%endnote%}
* **ExportView**
    {% note success%}
        用于设置当前工作流列表导出时使用的列表视图名称，导出的字段及字段顺序根据该视图确定。
    {%endnote%}
* **SubListURL**
    {% note success%}
        子表名称，用于设置在列表数据导出时同时导出数据的子表；子表和主表关联的字段为“S2_主表名”；配置值为子表的列表名称，例如：/Lists/SubListName。
    {%endnote%}
* **SearchFields**
    {% note success%}
        配置当前列表上可以用于关键字模糊检索的列表字段名。
    {%endnote%}
* **OrderBy**
    {% note success%}
        排序字段，可支持多个字段以半角逗号分隔。
    {%endnote%}
* **OrderByDesc**
    {% note success%}
        逆向排序字段，可支持多个字段以半角逗号分隔。
    {%endnote%}

&emsp;&emsp;上述列表属性字段以json格式组织并填写在列表属性（List Property）文本框中，例如：
```json
{
    "DisplayView":"SSFormView_2005",
    "ShowExportButton":true,
    "ExportView":"SSExportView",
    "SubListURL":"/Lists/ESTRA_DeliveryBatchDetail",
    "SearchFields":"SSW_WorkflowNumber,SSW_CurrentStatus_Text,Supplier,Planner,GenerateLabelMessage",
    "OrderByDesc":"SSW_WorkflowNumber,Supplier"
}
```

&emsp;&emsp;链接类型的第2个选择为“自定义链接”。选择这种链接类型时，在重定向URL（Redirect URL）字段中设置超链接。在工作流首页的左侧导航栏中点击当前工作流时，将转向这里设置的超链接对应的网络路径。
&emsp;&emsp;链接类型的第3个选择为“自定义列表”。选择这种链接类型时，在列表属性（List Property）文本框中设置列表属性，在工作流首页的左侧导航栏中点击当前工作流时，根据这里设置的列表属性显示相应的列表信息。列表属性包含下列设置项目：

* **Key**
    {% note success%}
        显示的列表关键字段，用于列表导入。
    {%endnote%}
* **ListURL**
    {% note success%}
        显示的列表名称，设置为“/Lists/ListName”。
    {%endnote%}
* **SubListURL**
    {% note success%}
        子表名称，用于设置在列表数据导出时同时导出数据的子表；子表和主表关联的字段为“S2_主表名”；配置值为子表的列表名称，例如：/Lists/SubListName。
    {%endnote%}
* **FormURL**
    {% note success%}
        用于显示列表信息的表单名称，该表单可以使用APortal表单设计器设计并发布。
    {%endnote%}
* **LinkFields**
    {% note success%}
        用于设置列表中关联表单的字段名称，点击该字段对应的超链接可打开FormURL属性中设置的表单。
    {%endnote%}
* **DisplayView**
    {% note success%}
        设置控制列表显示的字段和字段顺序的列表视图名称。
    {%endnote%}
* **DataView**
    {% note success%}
        设置控制列表显示的数据范围的列表视图名称。
    {%endnote%}
* **ImportView**
    {% note success%}
        设置用于列表数据导入的字段和字段顺序的列表视图名称；数据导入时使用的关键字根据Key属性设置。
    {%endnote%}
* **ExportView**
    {% note success%}
        设置用于列表数据导出的字段和字段顺序的列表视图名称；如果设置了子表（SubListURL），则子表的导出视图名称也相同，且导出时主表的字段在子表字段之前显示（按照从左至右的顺序）。
    {%endnote%}
* **ShowNewButton**
    {% note success%}
        是否显示 {% label danger@新增%} 按钮；如果设置为true，则点击该按钮时以新建模式打开FormURL中设置的表单。
    {%endnote%}
* **ShowEditButton**
    {% note success%}
        是否显示 {% label danger@编辑%} 按钮；如果设置为true，则在列表中选择了单行数据时，列表上方的 {% label danger@编辑%} 按钮显示且被激活，点击 {% label danger@编辑%} 按钮时以编辑模式打开FormURL中设置的表单，装载当前选中行的数据。
    {%endnote%}
* **ShowDeleteButton**
    {% note success%}
        是否显示 {% label danger@删除%} 按钮；如果设置为true，则在列表中选择了一行或多行数据时，列表上方的 {% label danger@删除%} 按钮显示且被激活，点击 {% label danger@删除%} 按钮并确认后，可将选中行的数据从列表中删除（发送到网站回收站）。
    {%endnote%}
* **ShowExportButton**
    {% note success%}
        是否显示 {% label danger@导出%} 按钮。
    {%endnote%}
* **OrderBy**
    {% note success%}
        排序字段，可支持多个字段以半角逗号分隔。
    {%endnote%}
* **OrderByDesc**
    {% note success%}
        逆向排序字段，可支持多个字段以半角逗号分隔。
    {%endnote%}
* **SearchFields**
    {% note success%}
        配置当前列表上可以用于关键字模糊检索的列表字段名。
    {%endnote%}
* **ShowAll**
    {% note success%}
        设置true或false，默认值为true，代表当前自定义的列表不限制权限，用户可以看到所有列表内容；如果设置为false，则当前用户只能看到列表上的SSW_Viewer（关联SSO_User列表的多值查阅项字段）或SSOwner（关联SSO_User列表的单值查阅项字段）字段里包含自己的那些记录内容。
    {%endnote%}
* **URLQueryString**
    {% note success%}
        用于设置装载表单的iframe链接后面增加QueryString参数。
    {%endnote%}

&emsp;&emsp;上述列表属性字段以json格式组织并填写在列表属性（List Property）文本框中，例如：
```json
{
    "Key":"Title",
    "ListURL":"/Lists/ESTRA_DelFor",
    "SubListURL":"/Lists/ESTRA_DelForDetail",
    "FormURL":"Form_2001",
    "LinkFields":"MaterialNumber",
    "DisplayView":"SSFormView_2001",
    "DataView":"SSFormView_2001",
    "ImportView":"",
    "ExportView":"SSExportView",
    "ShowNewButton":false,
    "ShowEditButton":false,
    "ShowDeleteButton":false,
    "ShowExportButton":true,
    "OrderByDesc":"ReleaseDateTime",
    "SearchFields":"SSW_WorkflowNumber,Plant,MaterialNumber,MaterialDescription,SupplierCode,SupplierDescription,ScheduleAgreement",
    "ShowAll":false,
    "URLQueryString":"&display=1"
}
```
{% fullimg images/aportal-2020-03-27-23-49-25.png,  class, 80%,80% %}

### 系统常量定义

&emsp;&emsp;系统常量中可以定义在整个系统中通用的常量，系统常量的值在定义时写入，不能修改，可以被系统中所有流程引用。
&emsp;&emsp;在工作流设计器左侧点击工作流名称，进入工作流属性设置页面。点击页面上方的 {% label danger@系统常量%} 按钮，在弹出的“系统常量定义”窗口中可进行系统常量的增加、修改和删除。
{% fullimg images/aportal-2020-03-27-23-49-46.png,  class, 80%,80% %}
&emsp;&emsp;点击系统常量定义窗口的 {% label danger@+新增%} 按钮，开始创建一个新的系统常量：

* **标题**
    {% note success%}
        在系统中，流程常量的标题必须唯一。
    {%endnote%}
* **变量类型**
    {% note success%}
        系统常量，不允许修改。
    {%endnote%}
* **值类型**
    {% note success%}
        可选项目包括：单行文本、数字、日期时间、是否、用户。
    {%endnote%}
* **值**
    {% note success%}
        根据变量值类型设置或选择相应的初始值，允许为空。
    {%endnote%}
* **备注**
    {% note success%}
        对系统常量进行说明的备注信息。
    {%endnote%}

{% fullimg images/aportal-2020-03-27-23-50-11.png,  class, 80%,80% %}

## 工作流版本

&emsp;&emsp;工作流版本是实际承载流程节点、流程操作、流程变量、流程角色以及附着在这些元素上的流程逻辑的载体。从结构上来说，工作流版本附着于工作流之下。每个工作流下都会有至少一个，多则数量不限的工作流版本。
&emsp;&emsp;一个工作流正式启用以后，在任意时间点都只会有一个工作流版本作为当前的工作版本，新提交的流程单据会以当前工作版本为基础启动新的流程。如果有新的工作版本发布，则其他已经在运行过程中的流程会按照启动时的流程版本继续流转，不会受新发布的工作版本影响。

### 工作流版本属性

&emsp;&emsp;在工作流设计器左侧导航栏中选中需要增加/管理工作流版本的工作流名称，然后在右侧内容区域上方点击 {% label danger@+ 新增/工作流版本%} 按钮，进入工作流版本新增页面。工作流版本属性分为3个主要区域：
{% fullimg images/aportal-2020-03-27-23-50-43.png,  class, 80%,80% %}

* **基本信息**
  * **标题**
    {% note success%}
        工作流版本的标题，默认为工作流名称+V+版本顺序号，可根据实际需要修改。
    {%endnote%}
  * **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的工作流版本标题。
    {%endnote%}
  * **工作流 (Workflow Category)**
    {% note success%}
        当前工作流版本所属的工作流，不允许修改。
    {%endnote%}
  * **版本号 (Workflow Version)**
    {% note success%}
        当前工作流版本的版本号，当工作流版本发布后系统自动生成，不允许修改。
    {%endnote%}
  * **流程缩写 (Short Name)**
    {% note success%}
        流程缩写，用于生成流程单据编号，对应工作流设置中的SEQKeyFormat里的{0}。
    {%endnote%}
  * **流程表单 (FormURL)**
    {% note success%}
        流程表单名称，填写表单设计器中设计的FormId（从表单属性页面获取，参照《工作流表单设计/设计表单/表单属性》。
    {%endnote%}
  * **备注 (Memo)**
    {% note success%}
        文本输入对工作流的备注说明。
    {%endnote%}
* **审批任务提醒**
  * **提醒邮件标题**
    {% note success%}
        设置当前流程版本特定的审批任务提醒邮件标题模板。
    {%endnote%}
  * **提醒邮件内容**
    {% note success%}
        设置当前流程版本特定的审批任务提醒邮件内容模板。
    {%endnote%}
* **审批超时提醒**
  * **超时提醒邮件标题**
    {% note success%}
        设置当前流程版本特定的审批任务超时提醒邮件标题模板。
    {%endnote%}
  * **超时提醒邮件内容**
    {% note success%}
        设置当前流程版本特定的审批任务超时提醒邮件内容模板。
    {%endnote%}

{% note danger%}
    注：邮件标题、内容模板具体设定规则可参照《系统管理/系统邮件模板设置》章节的相关说明。
{%endnote%}
{% fullimg images/aportal-2020-03-27-23-51-15.png,  class, 80%,80% %}
&emsp;&emsp;创建工作流版本并保存后，进入图形化的工作流版本设计页面。也可以从左侧导航栏中选择需要设置流程节点的工作流版本，进入相应的工作流版本设计页面。
{% fullimg images/aportal-2020-03-27-23-51-49.png,  class, 80%,80% %}

### 流程变量定义

&emsp;&emsp;流程变量可以用于在流程实例的流转过程中记录和流程或业务单据相关的中间结果，并根据流程流转条件对流程变量值进行修改。对于较复杂的业务逻辑也可以在自定义代码中给流程变量赋值。流程变量可以用于逻辑判断节点的逻辑条件判断，或列表赋值等操作。
&emsp;&emsp;在工作流版本设计页面上方点击 {% label danger@变量定义%} 按钮，在弹出的变量列表窗口中创建或编辑流程变量。
{% fullimg images/aportal-2020-03-27-23-52-06.png,  class, 80%,80% %}
&emsp;&emsp;点击 {% label danger@+ 新增%} 按钮创建一个新的流程变量，流程变量包含下列属性：

* **标题**
    {% note success%}
        在同一个工作流中，流程变量的标题必须唯一
    {%endnote%}
* **变量类型**
    {% note success%}
        工作流变量，不允许修改。
    {%endnote%}
* **变量值类型**
    {% note success%}
        可选项目包括：单行文本、数字、日期时间、是否、用户。
    {%endnote%}
* **初始值**
    {% note success%}
        根据变量值类型设置或选择相应的初始值，允许为空。
    {%endnote%}
* **备注**
    {% note success%}
        对变量进行说明的备注信息。
    {%endnote%}

{% fullimg images/aportal-2020-03-27-23-56-30.png,  class, 80%,80% %}

### 流程节点定义

&emsp;&emsp;工作流版本创建后，用户可以在工作流版本设计页面中通过添加流程节点，并使用流程操作将流程节点进行关联的方式对实际业务场景下的业务流程进行定义。
&emsp;&emsp;在工作流版本设计页面中，点击 {% label danger@+ 新增/工作流节点/节点类型%} 开始创建当前工作流版本中需要的流程节点。
{% fullimg images/aportal-2020-03-27-23-58-46.png,  class, 80%,80% %}

#### 启动节点

&emsp;&emsp;工作流版本创建时，系统默认为该工作流版本创建一个启动节点。每个工作流版本必须且仅允许创建一个启动节点。在工作流版本设计页面中选中“启动节点”，点击上方的 {% label danger@编辑%} 按钮，在弹出的节点属性窗口中进行设置，启动节点属性包括：

* **标题** 
    {% note success%}
        默认为“启动节点”，可修改。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的标题。
    {%endnote%}
* **节点顺序 (Node Order)**
    {% note success%}
        启动节点顺序默认为0，不允许修改；在每个工作流版本下只允许有一个顺序为0的节点。
    {%endnote%}
* **流程状态 (Workflow Status)**
    {% note success%}
        启动节点的流程状态默认设置为“退回修改/Rejected”状态，不允许修改；流程状态是指流程流转到该节点时流程所处的状态，启动节点的流程状态较为特殊，当流程实例第一次启动时，启动节点的状态默认为“启动/Starting”，当流程流转过程中被拒绝退回到启动节点时，流程状态等于“退回修改/Rejected”状态。
    {%endnote%}
* **附件上传 (Attachment Upload)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **审批说明 (Comments Input)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **备注**
    {% note success%}
        对流程节点进行说明，这个备注信息将显示在流程图上，当用户鼠标停留在节点上时。
    {%endnote%}

{% note danger%}
    注1：在工作流实际流转过程中，如果流程被退回到启动节点时在流程实例中还存在未完成的审批任务，这些任务均会被置为 {% label danger@取消%} 状态。这是为了避免流程退回并重新提交可能造成的任务重复分配和任务状态不一致。
    
    注2：其他设置参照《流程节点通用设置》章节的说明。
{%endnote%}
{% fullimg images/aportal-2020-03-28-00-09-54.png,  class, 80%,80% %}

#### 审批节点

&emsp;&emsp;审批处理节点是办公流程设计中最关键的流程节点，通过这个节点完成流程审批任务的分发和审批操作。
{% fullimg images/aportal-2020-03-28-00-12-22.png,  class, 80%,80% %}
&emsp;&emsp;审批处理节点特定的节点属性如下：

* **标题**
    {% note success%}
        节点名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的节点标题。
    {%endnote%}
* **节点顺序**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **工作流状态**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **备注**
* **审批类型**
  * **单人审批**
    {% note success%}
        代表该审批节点分发的审批任务（如果有多条）只要有一个任务被处理，其他所有任务都会被取消，流程将根据用户选定的操作继续流转。
    {%endnote%}
  * **并行审批**
    {% note success%}
        设为并行审批的情况下，节点操作只允许设置2条，并且操作数值分别设定为1和0，使用1代表同意（或类似操作，操作名称可自定义）；使用0代表拒绝（或类似操作，操作名称可自定义）。
        并行审批节点分配出审批任务（如果有多条）中，如果任意一条被处理时选择了操作数值0对应的节点操作（拒绝），则同节点上其他所有未处理任务都将被取消，流程将按照拒绝操作继续流转；如果所有任务都被处理并且选择了操作数值1对应的节点操作（同意），则流程将按照同意操作继续流转。
        并行审批节点可以设置“最少并行审批数”参数，如果该参数不设置或设置为0，则并行节点上分配的所有任务必须全部审批通过才算通过；如果该参数设置为大于0的正整数，则当并行节点上审批通过的任务数量（也即选择操作数值为1的审批操作数量）大于等于该数字时，该节点通过审批，否则等待。
    {%endnote%}
* **附件上传 (Attachment Upload)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **审批说明 (Comments Input)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **任务分发类型**
    {% note success%}
        该属性仅对需要在该节点前一步的审批处理（或单据提交）页面上选择下步节点的审批角色和审批用户时有效。
    {%endnote%}
  * **角色**
    {% note success%}
        仅列出根据该节点的角色设置中设置的角色解析出的所有部门角色用户关系列表供审批用户选择。
    {%endnote%}
  * **用户**
    {% note success%}
        同时列出部门角色用户关系列表和用户列表，用户列表根据所选择的部门角色用户关系自动过滤出相关联的用户列表供审批用户选择。
    {%endnote%}
* **避免重复审批**
    {% note success%}
        该属性设置为“是”时，在当前审批节点上分配的工作流任务中如果包含在当前流程实例的前面节点中进行过审批，且选择了“审批通过”操作的审批用户，则在当前节点上自动作为“审批通过”处理；也就是说同一个用户可避免两次对同一个流程进行“审批通过”的操作。
    {%endnote%}
* **允许召回 (Can be retrived)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **加签类型**
    {% note success%}
        在审批处理节点上设置加签后，审批用户在流程中可以在当前节点之前或之后增加原流程设计中不包含的其他审批处理用户。
    {%endnote%}
  * **前加签**
    {% note success%}
        审批用户可以在其本人的审批之前增加其他审批处理用户，前加签的用户完成审批后，无论前加签用户选择的审批意见是『同意』（审批操作数值为1）还是『拒绝』（审批操作数值为0），审批任务都会回到原来的审批用户处继续处理。
    {%endnote%}
  * **后加签**
    {% note success%}
        审批用户可以在其本人的审批之后增加其他审批处理用户，后加签的用户选择的审批意见将替代当前审批用户的审批意见。
    {%endnote%}
  * **委派**
    {% note success%}
        审批用户可以将自己的审批任务委派给其他用户处理。
    {%endnote%}
  * **要求解释**
    {% note success%}
        审批用户将当前任务转发给流程申请人，流程申请人对该单据进行解释后重新提交回到当前审批用户处进行审批。
    {%endnote%}
  * **加签**
    {% note success%}
        审批用户将其他用户设置为审批用户，增加的用户和当前审批用户对于审批任务的操作的效果是相同的，也就是说无论是加签的用户还是原审批用户都可以对单据进行审批。
    {%endnote%}
* **最少并行审批数**
    {% note success%}
        审批类型选择为并行审批时，如果该属性设置的数字为大于0的整数，则判断该节点上已经有大于或等于该数字的审批人员，或是所有审批人员执行了代表“审批通过（操作数值=1）”的审批操作时，该节点被判定为审批通过，并按照设置的流程继续向下流转；如果该属性未设置或设置为0，则必须是所有审批人员审批通过，该节点才被判定为审批通过。
    {%endnote%}
* **允许邮件审批**
    {% note success%}
        设定在本节点的用户，是否可以通过回复电子邮件进行审批处理。通过电子邮件审批需要在系统中进行相应的设定，详细请参照《系统管理/电子邮件审批设置』。
    {%endnote%}
* **发送邮件附件**
    {% note success%}
        设定是否将流程单据上的附件（如果有，仅限主表单上的附件）作为通知任务审批用户的电子邮件附件；结合邮件附件 (MailAttachments)属性一起使用。
    {%endnote%}
* **邮件附件 (MailAttachments)**
    {% note success%}
        如果发送邮件附件设置为“是”，则判断MailAttachments是否有值，如果没有值则将当前表单上所有以“SSF_Attachments”开头的文本附件字段和列表本身的附件字段 (Attachments)包含的所有附件作为当前节点发送的电子邮件附件发送给审批用户；如果MailAttachments字段中设置了内容，则仅将该字段中设置的字段内包含的附件作为邮件附件发送。
    {%endnote%}
* **邮件标题模板**
    {% note success%}
        参见《系统邮件模板设置》。
    {%endnote%}
* **邮件内容模板**
    {% note success%}
        参见《系统邮件模板设置》。
    {%endnote%}
* **自定义代码**
    {% note success%}
        参见《通用设置》
    {%endnote%}
* **可编辑字段**
    {% note success%}
        参见《通用设置》
    {%endnote%}

#### 审阅节点

&emsp;&emsp;审阅节点通常用于在流程中给相关人员发送通知提醒。审阅节点将审阅任务分配给相关人员，审阅节点不会阻止流程，审阅节点分发审阅任务后就将继续转向下步节点的处理。
{% fullimg images/aportal-2020-03-28-00-33-03.png,  class, 80%,80% %}
&emsp;&emsp;审阅节点的节点属性如下：

* **标题**
    {% note success%}
        节点名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的节点标题。
    {%endnote%}
* **节点顺序**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **工作流状态**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **备注**
* **附件上传 (Attachment Upload)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **审批说明 (Comments Input)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **邮件附件 (MailAttachments)**
    {% note success%}
        如果发送邮件附件设置为“是”，则判断MailAttachments是否有值，如果没有值则将当前表单上所有以“SSF_Attachments”开头的文本附件字段和列表本身的附件字段 (Attachments)包含的所有附件作为当前节点发送的电子邮件附件发送给审批用户；如果MailAttachments字段中设置了内容，则仅将该字段中设置的字段内包含的附件作为邮件附件发送。
    {%endnote%}
* **邮件标题模板**
    {% note success%}
        参见《系统邮件模板设置》。
    {%endnote%}
* **邮件内容模板**
    {% note success%}
        参见《系统邮件模板设置》。
    {%endnote%}
* **自定义代码**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **可编辑字段**
    {% note success%}
        参见《通用设置》。
    {%endnote%}

#### 逻辑判断节点

&emsp;&emsp;逻辑判断节点可以在不同的流程分支上设置逻辑判断公式，让流程根据逻辑判断的结果走向不同的分支，从而实现对流程走向的灵活控制。
{% fullimg images/aportal-2020-03-28-00-38-40.png,  class, 80%,80% %}
&emsp;&emsp;逻辑判断节点的节点属性如下：

* **标题**
    {% note success%}
        节点名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的节点标题。
    {%endnote%}
* **节点顺序**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **工作流状态**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **允许召回**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **自定义代码**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **多操作执行 (Multioperation)**
    {% note success%}
        该字段设置为Yes时，当前的逻辑判断节点在流程实例中如果有多个节点操作的逻辑公式都满足True的条件，则多个节点操作将被同时启动；否则，仅第一个满足逻辑公式==True的节点操作将被启动。
    {%endnote%}
* **备注**

#### 并行节点

&emsp;&emsp;并发处理节点用于在流程中判断多条并发的流程分支是否完成，并在和该节点关联的所有并发流程分支完成后向下继续流转。在工作流中启动并发并不需要使用并发节点，只需要在一个操作下设置多个下步流程节点，就可以开始并发处理。
&emsp;&emsp;在并发处理结束的地方，必须将所有并发处理的流程分支均指向同一个并发处理节点判断，并使用该节点判断并发流程分支是否已经全部处理完成。
&emsp;&emsp;并发节点的节点操作只能设定一个，如果设定多个，流程会从最后一个创建的节点操作流转。
{% fullimg images/aportal-2020-03-28-00-42-19.png,  class, 80%,80% %}
&emsp;&emsp;并行节点的节点属性如下：

* **标题**
    {% note success%}
        节点名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的节点标题。
    {%endnote%}
* **节点顺序**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **工作流状态**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **允许召回 (Can be retrived)**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **自定义代码**
    {% note success%}
        参见《通用设置》。
    {%endnote%}
* **并发数量**
    {% note success%}
        当前并发节点对应的并发数量。如果设定了该值，则并发处理节点判断已经完成的并发操作数是否等于设定的并发数量，等于则继续流转流程，否则继续等待。
    {%endnote%}
* **并发启动节点**
    {% note success%}
        当前并发节点对应的所有并发的最初启动节点。如果设定了该值，则并发处理节点找到该启动节点，计算从该启动节点启动的实际并发分支数量（和工作流实例相关的并发数量，当前实例中未启动的分支不计算），并以该数量判断已经结束的并发数量是否满足继续向下流转的条件。
    {%endnote%}

#### 结束节点

&emsp;&emsp;流程结束节点标志一个流程已经完成或终止。在流程中，一旦流程结束节点被触发，流程实例关联的所有未完成任务和处于等待状态的节点都将被取消。流程结束节点的状态通常设置为“流程结束”或“流程中止”。
&emsp;&emsp;流程结束节点通常可以用来结束一个流程，或是中止一个不需要继续执行的流程。每个流程中可以有多个流程结束节点。
{% fullimg images/aportal-2020-03-28-00-46-33.png,  class, 80%,80% %}
&emsp;&emsp;结束节点的节点属性如下：

* **标题**
    {% note success%}
        节点名称。
    {%endnote%}
* **中文/英文/日文标题**
    {% note success%}
        在多语言环境下显示的节点标题。
    {%endnote%}
* **节点顺序**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **工作流状态**
    {% note success%}
        参见《流程节点通用设置》的说明。
    {%endnote%}
* **自定义代码**
    {% note success%}
        参见《通用设置》。
    {%endnote%}

{% note danger%}
    注：如果流程设置合理，流程中的任务都可以正常结束的情况下，理论上来讲流程结束节点是非必须的。
{%endnote%}

#### 通用设置

&emsp;&emsp;以下是多个类型的流程节点通用设置：

* **附件上传 (Attachment Upload)**
    {% note success%}
        不需要/可选/必须上传；流程提交前审批人员可以做的审批附件操作；如果设置为“不需要”，则审批页面上不会出现审批附件上传控件，如果设置为“必须上传”，则审批人员必须上传审批附件后才能提交流程；该属性适用于启动节点、审批节点、审阅节点。
    {%endnote%}
* **审批说明 (Comments Input)**
    {% note success%}
        不需要/可选/必须填写；流程提交前当前的审批人员是否需要/允许输入审批说明；如果设置为“不需要”，则审批界面上将不显示审批说明输入框，如果设置为“必须填写”，则审批人员必须填写审批说明后才能提交流程；该属性适用于启动节点、审批节点、审阅节点。
    {%endnote%}
* **节点顺序**
    {% note success%}
        从参见《流程节点通用设置》的说明；节点在流程图中显示的顺序，可以以整数+小数的形式设置；整数决定节点所在的行数（以启动节点为第0行，依次向下延伸），小数部分决定节点在行上从左开始所在的列数。
    {%endnote%}
* **允许召回**
    {% note success%}
        该属性设置为“是”时，当流程单据处于审批节点或逻辑判断节点上等待的情况下（如果有多个节点同时处于等待状态，则必须所有等待中的节点的“允许召回”属性都被设置为“是”），申请人打开单据时可以通过点击单据页面上的『召回』按钮将单据回收到启动节点；在启动节点上申请人可以对单据进行修改后重新提交，流程将从头开始重新执行；在启动节点上申请人也可以通过点击单据页面上的 {% label danger@终止%} 按钮来终止该单据，
    {%endnote%}
* **工作流状态**
    {% note success%}
        当流程到达某个节点时，节点上设置的工作流状态将被设置为当前流程的工作流状态；“启动/Starting”和“回收中/Withdrawing”两个状态用于系统启动和回收流程，不可设置在流程节点上。
    {%endnote%}
* **自定义代码**
    {% note success%}
        使用自定义代码，可以在流程中完成流程节点操作和流程逻辑不支持的特殊业务逻辑，给需要复杂计算的流程变量赋值，启动和本流程相关的子流程，或者和第三方系统的交互。
        自定义代码需继承水杉工作流节点事件基类：S2WorkflowNodeEvent。在该基类中开发了4个事件供开发者调用，分别对应流程节点处理的不同时机：
    {%endnote%}
  * **Inited**
    {% note success%}
        流程节点启动时，也即进入流程节点前。
    {%endnote%}
  * **Processed**
    {% note success%}
        流程节点启动完成，也即进入流程节点后。
    {%endnote%}
  * **TaskCompleted**
    {% note success%}
        审批任务完成后，该事件仅适用于审批处理节点。
    {%endnote%}
  * **Completed**
    {% note success%}
        节点完成后，也即流程离开节点之前。
    {%endnote%}

&emsp;&emsp;继承S2WorkflowNodeEvent实现流程自定义代码片段如下图所示：
```csharp
namespace APortal.NodeEvents {
    public class GetCustomerService : ExternalEvent {
        public override void Completed (SSWorkflowControl wfc) {
            Log.WriteLine (String.Format ("节点[id={0},title={1}] Completed GetCustomerService_自定义代码调用成功", wfc.Id, wfc.Title));
            Web web = wfc.web;
            List customerOUCList = ListExtensions.GetListByUrl (web, "Lists/APortal_CustomerOUC");
            SSListItem formDataItem = wfc.SSWorkflow.FormDataItem;
            int customerID = formDataItem.GetFieldValue<FieldLookupValue> ("CUID").LookupId;
            int endCustomerID = formDataItem.GetFieldValue<FieldLookupValue> ("EndCustomer").LookupId;
            int companyCodeID = formDataItem.GetFieldValue<FieldLookupValue> ("CompanyCode").LookupId;

            CamlQuery camlQuery_CustomerOUC = new CamlQuery ();
            camlQuery_CustomerOUC.ViewXml = CAML.ViewQuery (ViewScope.Recursive,
                CAML.Where (
                    CAML.And (
                        CAML.Eq (CAML.FieldValue ("CompanyCode", "Lookup", companyCodeID.ToString (), "LookupId='true'")),
                        string.Format ("<In><FieldRef Name=\"WorkflowNode\" LookupId=\"True\" /><Values><Value Type=\"Integer\">{0}</Value><Value Type=\"Integer\">{1}</Value></Values></In>", customerID, endCustomerID)
                    )), "", CAML.ViewFields (CAML.FieldRef ("ID"), CAML.FieldRef ("Title"), CAML.FieldRef ("CustomerService")), 99);

            ListItemCollection customerOUCListItems = customerOUCList.GetItems (camlQuery_CustomerOUC);
            web.Context.Load (customerOUCListItems);
            web.Context.ExecuteQueryRetry (3, 100);
            string user4Value = "";
            if (customerOUCListItems.Count > 0) {
                SSListItem customerOUCListItem = new SSListItem (customerOUCListItems[0]);
                if (customerOUCListItem["CustomerService"] != null) {
                    FieldLookupValue[] customerServiceValues = customerOUCListItem.GetFieldValue<FieldLookupValue[]> ("CustomerService");
                    foreach (var customerServiceValue in customerServiceValues) {
                        user4Value = string.Format ("{0}{1};#{2};#", user4Value, customerServiceValue.LookupId, customerServiceValue.LookupValue);
                    }
                }
            }
            formDataItem["User4"] = user4Value;
            formDataItem.Update (false);
            Log.WriteLine (String.Format ("GetCustomerService_自定义代码调用结束。"));
        }
    }
}
```
&emsp;&emsp;S2WorkflowNodeEvent接口的代码片段如下图所示：
```csharp
namespace APortal.NodeEvents {
    public class ExternalEvent : ShuiShan.S3.Workflow.ISSWNodeExternalEvent {
        public virtual void Inited (SSWorkflowControl wfc) {
            //wfc.Memo = String.Format("{0},{1}:{2}", wfc.Memo, System.DateTime.Now, "S3NodeEventTesting.Inited");
            //wfc.Update();
        }

        public virtual void Processed (SSWorkflowControl wfc) {
            //wfc.Memo = String.Format("{0},{1}:{2}", wfc.Memo, System.DateTime.Now, "S3NodeEventTesting.Processed");
            //wfc.Update();
        }

        public virtual void TaskCompleted (SSWorkflowTask task) {
            //task.SSWorkflowControl.Memo = String.Format("{0},{1}:{2}-{3}", task.SSWorkflowControl.Memo, System.DateTime.Now, "S3NodeEventTesting.TaskCompleted", task.Id);
            //task.SSWorkflowControl.Update();
        }

        public virtual void Completed (SSWorkflowControl wfc) {
            //wfc.Memo = String.Format("{0},{1}:{2}", wfc.Memo, System.DateTime.Now, "S3NodeEventTesting.Completed");
            //wfc.Update();
        }
    }
}
```
&emsp;&emsp;自定义代码部署后，将自定义代码名称写入相应的流程节点的节点处理代码处，包括下列部分：节点处理代码的完整命名空间和类名称，项目名称，版本号，Culture=neutral，PublicKeyTokey，如下图所示：
{% fullimg images/aportal-2020-03-28-01-01-48.png,  class, 80%,80% %}

* **可编辑字段**
    {% note success%}
        流程处于审批、审阅或启动节点时，流程审批人员打开流程表单时，表单上可以设置部分字段允许审批人员进行编辑，以满足特定的业务需求；需要在节点所对应的审批/审阅流程表单上编辑的字段可以在节点的“可编辑字段”中写入字段的名称（列表字段的定义名称），每个字段占一行；如果需要在页面上支持子表的编辑，可配置子表名称，按照：“Lists/子表名称”的格式设置；如果某个节点上需要设置页面上所有可编辑字段都放开编辑，则可以设置关键字：”\<ALL\>”。
    {%endnote%}

### 节点设置

#### 变量赋值

&emsp;&emsp;可以在流程节点上为已经定义的流程变量进行赋值。在工作流设计器中选择工作流节点，并点击『变量赋值』按钮，在弹出的『变量赋值』窗口中可以新增、编辑和删除变量赋值定义记录。
{% fullimg images/aportal-2020-03-28-11-35-36.png,  class, 80%,80% %}
{% fullimg images/aportal-2020-03-28-11-36-27.png,  class, 50%,50% %}

* **工作流变量**
    {% note success%}
        选择需要进行赋值的工作流变量。
    {%endnote%}
* **变量赋值事件**
  * **节点预处理**
    {% note success%}
        节点启动前进行赋值，这个赋值事件仅适用于审批、审阅类型节点，预处理事件在审批、审阅类型节点的工作流任务被分配前触发，可以在这个事件中写入或修改和当前节点审批相关的用户类型变量。
    {%endnote%}
  * **节点启动**
    {% note success%}
        节点启动时进行赋值。
    {%endnote%}
  * **节点结束**
    {% note success%}
        节点结束时（流程离开该节点前）进行赋值。
    {%endnote%}
    {% note danger%}
        注意：在流程启动节点上对变量进行赋值时，如果需要在流程退回启动节点并重新提交后对变量进行重新赋值的话，则应考虑在启动节点的“节点结束”事件中进行变量赋值；启动节点的“节点启动”事件仅在进入启动节点时触发，此时流程单据还没有进行修改，可能会影响流程变量获得正确的值。
    {%endnote%}
* **赋值来源**
  * **特定值**
    {% note success%}
      * **文本、数字类型等可输入固定值。**
      * **文本类型可输入：$DTC.今天，$DTC.今日，$DTC.Today：代表变量赋值时当天的日期，不带时间。**
      * **文本类型可输入：$DTC.现在，$DTC.Now：代表变量赋值时的日期时间，包含时间。**
      * **日期类型变量可选择特定日期。**
      * **是否类型可选择Yes/No作为设置值。**
      * **用户类型可从系统的用户列表中选择特定的用户。**
    {%endnote%}
  * **工作流变量**
    {% note success%}
        可以选择当前流程中相同类型的变量进行赋值。
    {%endnote%}
  * **系统常量**
    {% note success%}
        可以从当前系统中定义的同类型的系统常量列表中选择需要赋值给当前变量的常量名称。
    {%endnote%}
  * **工作流列表**
    {% note success%}
        可以选择工作流信息中相同类型的字段值进行赋值。
    {%endnote%}
  * **业务列表**
    {% note success%}
        可以选择业务单据列表中相同类型的字段值进行赋值。
    {%endnote%}
  * **计算值**
    {% note success%}
        可写入公式引用来自业务单据或工作流单据的字段值（可参照《逻辑公式设置》的说明）；支持对数字类型变量的带括号的加减乘除四则运算，例如：($VAR.number1+$VAR.number2)*$VAR.number2。
    {%endnote%}
* **设置值**
    {% note success%}
        根据赋值来源分别选择或输入相应的值。
    {%endnote%}
* **排序**
    {% note success%}
        设置赋值的顺序。
    {%endnote%}

#### 列表赋值

&emsp;&emsp;在流程运转过程中，可以利用列表赋值功能给流程相关的工作流信息列表或业务单据信息列表上的特定字段进行赋值操作。
&emsp;&emsp;在工作流版本设计页面中，选择需要进行列表赋值操作的节点，点击页面上方的『列表赋值』按钮，在弹出页面中对当前节点的列表赋值操作进行新增、编辑和删除。
{% fullimg images/aportal-2020-03-28-11-50-28.png,  class, 80%,80% %}
点击 {% label danger@新增%} 按钮，在弹出窗口中开始定义新的列表赋值操作：

* **赋值目标列表 (Target List)**
    {% note success%}
        从“工作流列表”或“业务单据列表”中选择。
    {%endnote%}
* **字段名称**
    {% note success%}
        根据赋值目标列表的选择，分别列出工作流列表或业务单据列表的字段供选择。
    {%endnote%}
* **赋值事件**
  * **节点预处理**
    {% note success%}
        节点启动前进行赋值，这个赋值事件仅适用于审批、审阅类型节点，预处理事件在审批、审阅类型节点的工作流任务被分配前触发，可以在这个事件中写入或修改和当前节点审批相关的工作流或业务列表字段。
    {%endnote%}
  * **节点启动**
    {% note success%}
        节点启动时进行赋值。
    {%endnote%}
  * **节点结束**
    {% note success%}
        节点结束时（流程离开该节点前）进行赋值。
    {%endnote%}
* **赋值来源**
  * **工作流变量**
  * **系统常量**
  * **计算值**
* **变量名称**
    {% note success%}
        如果在赋值来源设置了工作流量或系统常量，则变量名称中分别列出和当前选择的字段相同类型的工作流变量和系统常量供用户选择。
    {%endnote%}
* **赋值顺序 (Order By)**
    {% note success%}
        设置数字，定义当前的列表赋值顺序。
    {%endnote%}
* **默认值 (Default Value)**
    {% note success%}
        如果赋值来源选择了计算值，在默认值处写入确定值或公式引用来自业务单据或工作流单据的字段值（可参照《逻辑公式设置》的说明）。
    {%endnote%}

{% fullimg images/aportal-2020-03-28-11-53-11.png,  class, 50%,50% %}


#### 节点超时操作

&emsp;&emsp;节点超时操作用于定义审批节点在审批任务分发超过一定时间后，由工作流引擎自动执行的动作。在工作流设计器中选中需要设置超时操作的审批节点后，点击页面上方的 {% label danger@节点超时操作%} 按钮，在弹出窗口中将显示已经在该节点上定义的节点超时操作。
{% fullimg images/aportal-2020-03-28-11-59-00.png,  class, 80%,80% %}
点击 {% label danger@新建%} 按钮开始创建一个新的节点操作，包含下列属性设置：

* **超时操作**
    {% note success%}
        在超时发生时由系统自动执行的操作类型：
    {%endnote%}
  * **邮件提醒**
    {% note success%}
        自动发送邮件。
    {%endnote%}
  * **同意**
    {% note success%}
        对当前审批节点自动执行“同意”操作。
    {%endnote%}
  * **拒绝**
    {% note success%}
        对当前审批节点自动执行“拒绝”操作
    {%endnote%}
* **提醒时间计算基础**
    {% note success%}
        选择计算应提醒时间的依据：
    {%endnote%}
  * **节点启动时间**
    {% note success%}
        当前审批节点启动的时间。
    {%endnote%}
  * **流程启动时间**
    {% note success%}
        当前流程启动时间。
    {%endnote%}
  * **时间类型变量**
    {% note success%}
        从当前流程中定义的时间类型变量选择一个.
    {%endnote%}
* **提醒启动时间间隔 (Reminder Interval)**
    {% note success%}
        定义从提醒时间计算基础开始以后多久时间进行第一次提醒。时间间隔定义为以分钟为单位的数字。
    {%endnote%}
* **循环提醒**
    {% note success%}
        可选择一次（仅处理一次），选择每分，每时（每小时），每天，每周，每月，每年，则需要设定『循环提醒间隔』，工作流结合循环提醒和循环提醒间隔的设定进行重复触发的提醒操作；例如循环提醒设置了每天，循环提醒间隔设置了2，则代表每2天提醒一次。
    {%endnote%}
* **循环提醒次数**
    {% note success%}
        循环提醒发生的次数。
    {%endnote%}
* **循环提醒持续时间**
    {% note success%}
        以分钟为单位的时间，从提醒时间计算基础开始，超过这个时间点后，不再循环提醒；这个属性和前述的“循环提醒次数”共同生效，以先到者为准。
    {%endnote%}
* **收件人、抄送**
    {% note success%}
        可选择当前申请人，当前审批人，或从当前流程的人员类型变量中选择，可多选。
    {%endnote%}
* **逻辑判断公式 (Formula)**
    {% note success%}
        可定义逻辑判断公式，来同时决定相应的节点超时操作是否执行；如果逻辑判断公式不为空，则当相应的节点启动时，逻辑判断公式的计算结果需等于True，当前的节点超时操作设置才能生效。
    {%endnote%}
* **邮件标题模板、邮件内容模板、短信提醒模板**
    {% note success%}
        发送邮件和短信提醒的标题和内容模板，具体设置方式参照『流程相关设定/邮件和短信模板』章节的说明。
    {%endnote%}

{% fullimg images/aportal-2020-03-28-12-01-31.png,  class, 50%,50% %}

### 节点角色

&emsp;&emsp;节点角色适用于审批、审阅和启动节点的设置。节点角色的设置决定了在相应的节点上被分配审批、审阅处理任务的角色和用户。无论在节点角色中设置的是角色或用户，最终所有任务都将分配到具体的用户帐号。
&emsp;&emsp;在流程设计器中选择需要设定节点角色的节点后，点击页面上方的『角色定义』按钮，在弹出的“工作流节点角色”窗口中定义当前节点的角色、用户。
{% fullimg images/aportal-2020-03-28-12-15-32.png,  class, 50%,50% %}

* 部门角色 (Department Role)
    {% note success%}
        指定部门角色用户关系，设置特定部门上的某个角色中包含的用户作为流程审批或审阅人员。
    {%endnote%}
* 向上相对角色 (Up Role)
    {% note success%}
        在角色列表里指定一个角色名称，从流程实例的所属部门向上寻找到的第一个对应该角色的部门角色用户关系中包含的用户即为该节点的审批或审阅人员。例如，设置向上相对角色为“副总经理”，则从发起人所属部门向上在组织结构树中逐层寻找，找到任何一个部门下有“副总经理”角色时就停止寻找，并将找到的第一个部门角色用户关系中包含的用户取出，并给这些用户分发该节点的任务。
        流程实例的所属部门的默认值等于流程发起人的所属部门，也可以根据实际业务需求在表单或流程中修改这个默认的所属部门。此外，在流程实例上还有一个Department0字段，如果在流程中给该字段赋值，那么工作流引擎将以这个字段里存储的部门为基础向上寻找相对角色。
    {%endnote%}
    {% note danger%}
        注1：设置向上相对角色时需要注意确保在流程的发起人所属部门向上可以找到这个角色，否则会导致该节点无法分配任务。当然，在特定情况下，也可以通过节点上的默认操作功能，在节点没有任务分配时自动转向默认操作，避免流程中断。
    {%endnote%}
* 特定角色：
  * 发起人
    {% note success%}
        发起流程的用户。
    {%endnote%}
  * 发起人的直线经理
    {% note success%}
        在发起人的用户信息中定义的直线经理用户。
    {%endnote%}
  * 最近审批人的直线经理
    {% note success%}
        在流程流转过程中，最近一个审批用户的直线经理用户。通常可以用来设置循着人员汇报线条逐步向上审批的流程。
    {%endnote%}
  * 创建人
    {% note success%}
        创建流程的用户（通常和发起人相同，但是在某些流程中可以修改发起人，创建人则不能修改）。
    {%endnote%}
  * 部门经理
    {% note success%}
        流程单据所属部门（默认为创建流程的用户的所属部门，可根据实际需要修改）的部门经理。
    {%endnote%}
* 曾用处理人 (Prev. Approver)
    {% note success%}
        从节点列表中选择一个启动、审批或审阅类型的节点，本节点将把审批或审阅任务分配给该节点同样的用户；通常可以使用曾用处理人功能让曾经在某个节点上处理过任务的用户在后续流程中再次确认处理结果。
    {%endnote%}
* 指定用户
    {% note success%}
        指定特定用户作为节点任务处理人员，可设置多个。
    {%endnote%}
* 指定角色
    {% note success%}
        从角色列表中指定一个或多个角色名称，组织结构中所有和该角色关联的部门角色用户关系中包含的用户均作为节点任务处理人员。
    {%endnote%}
* 用户组
    {% note success%}
        从组织结构中定义的用户组中选择一个或多个，将工作流任务分配给属于这些用户组的所有用户。
    {%endnote%}
* 公式
    {% note success%}
        此处可以填写工作流列表、业务列表或工作流变量中定义的用户类型字段或变量：
    {%endnote%}
  * 工作流列表
    {% note success%}
        $SSW.字段名称。
    {%endnote%}
  * 表单关联的业务列表
    {% note success%}
        $SYW.字段名称。
    {%endnote%}
  * 工作流变量
    {% note success%}
        $VAR.变量名称。
    {%endnote%}
    {% note danger%}
        注：上面所写的字段名称或变量名称关联的数据必须是用户类型（关联SSO_User）的查阅项字段，否则在流程中将无法实现预想的效果。
    {%endnote%}

### 节点操作

&emsp;&emsp;节点操作构成流程图中连接不同流程节点的线条。在审批类型的流程节点中，节点操作对应审批用户选择的审批意见（例如：同意、拒绝等）。
&emsp;&emsp;在节点编辑页面中选择“节点操作”标签页，进入节点操作设置页面。
{% fullimg images/aportal-2020-03-28-12-43-52.png,  class, 50%,50% %}
&emsp;&emsp;在节点操作列表上方点击 {% label danger@新增%} 按钮开始创建一个新的流程操作。

* 工作流节点
    {% note success%}
        即当前编辑的节点，不可修改。
    {%endnote%}
* 操作类型
    {% note success%}
        操作类型包括同意、拒绝、其它、隐藏4种，选择不同的操作类型可以对操作名称、操作数值等属性进行快捷设置。
    {%endnote%}
  * 同意
    {% note success%}
        操作名称默认设置为“同意/Approve”，操作数值设置为1。
    {%endnote%}
  * 拒绝
    {% note success%}
        操作名称默认设置为“拒绝/Reject”，操作数值设置为0。
    {%endnote%}
  * 其他
    {% note success%}
        操作名称不设置默认值，操作数值设置为2。
    {%endnote%}
  * 隐藏
    {% note success%}
        操作名称不设置默认值，操作数值设置为-1。
    {%endnote%}
* 操作名称
    {% note success%}
        文字输入，例如：同意、拒绝等；可输入中文/英文/日文三种多语言选项。
    {%endnote%}
* 操作数值
    {% note success%}
        数字输入。如果仅有同意、拒绝操作，则同意操作使用数字1作为操作数值，拒绝操作则使用数字0。
        如果操作名称为负数，则该操作为隐藏操作，将不会出现在审批用户的审批界面上供选择。这个功能可以用于需要设定特定的默认操作用于在流程实例流转到节点时，节点对应的角色中不包含任何实际用户时的自动转向；或是节点超时自动转向的操作。
    {%endnote%}
    {% note danger%}
        注1：操作数值为负数的操作仅仅在审批任务界面上不会显示，在流程图上仍然会显示。因此，设定操作数值为负数仅对审批节点有实际意义；
        注2：同一个节点下的所有节点操作的操作数值不能重复。
    {%endnote%}
* 操作后流转节点
    {% note success%}
        指定该操作后流转向的其他工作流节点；操作后流转节点可以指定多个，也可以指向当前节点本身。
    {%endnote%}
    {% note danger%}
        注：如果将操作后流转节点指向节点自身，则需小心设计流程避免死循环的产生。除非是故意要设计死循环流程。
    {%endnote%}
* 逻辑判断公式
    {% note success%}
        逻辑判断公式适用于逻辑判断节点，在逻辑判断节点上符合逻辑判断公式==True的节点操作将被启动。逻辑公式设置方式参照《系统管理/逻辑公式设置》章节的相关说明。
    {%endnote%}
* 默认操作
    {% note success%}
        如果流程实例运转到审批处理节点时根据节点的角色设置没有找到任何实际用户可以分配任务（或是没有分配任何角色），则流程将自动转向该节点关联的默认操作设置为“是”的操作，如果有多个默认操作则转向找到的第一个默认操作。
    {%endnote%}
* 备注
    {% note success%}
        文本输入对该节点操作的说明信息。
    {%endnote%}

### 工作流版本发布

&emsp;&emsp;工作流版本定义完成后，可以点击工作流设计器上方的『发布』按钮，将当前设计的工作流版本发布为工作流的最新版本。
&emsp;&emsp;工作流版本发布后，当前工作流发起的新实例将以最新版本为基础启动和流转。在工作流最新版本发布前已经启动的流程，将按照上一个版本的工作流继续流转直至完成或终止。
{% fullimg images/aportal-2020-03-28-12-54-28.png,  class, 80%,80% %}

