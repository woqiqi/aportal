---
title: 表单设计
date: 2020-01-03 14:28:17
---

&emsp;&emsp;水杉表单设计器可以帮助用户基于SharePoint列表快速地设计和发布表单，表单可以和水杉工作流集成，构成完整的业务流程应用。用户可以通过下面的链接进入表单设计器：
{% note info%}
    工作流站点URL/designer/designer.aspx
{%endnote%}

## 新建表单

&emsp;&emsp;表单设计器页面地址：
{% note info%}
    SharePoint网站地址/designer/designer.aspx
{%endnote%}
进入表单设计器后，首先在页面上方点击『选择列表』按钮，选择需要创建表单的列表。
{% fullimg images/aportal-2020-03-28-16-30-27.png,  class, 80%,80% %}
&emsp;&emsp;选择列表后，点击 {% label danger@+ 新建表单%} 按钮，系统将提示“新建表单成功”，在左侧导航栏中出现一个新的表单，双击该表单可以编辑表单名称。
{% fullimg images/aportal-2020-03-28-16-32-40.png,  class, 80%,80% %}
&emsp;&emsp;点击 {% label danger@保存表单%} 按钮，将新建的表单保存到系统中，完成新建表单过程。

## 设计表单

&emsp;&emsp;通过在表单设计器中选择列表后，如果该列表下有现存的表单，可以进一步选择现存的表单名称。选择表单后，可以打开现存的表单进行设计和调整。

### 表单属性

&emsp;&emsp;在页面上方点击 {% label danger@表单属性%} 按钮可打开表单属性窗口进行修改。
{% fullimg images/aportal-2020-03-28-16-35-15.png,  class, 50%,50% %}
&emsp;&emsp;表单属性包括下列信息：

* **FormId**
    {% note success%}
        表单ID在系统中（指同一个SharePoint网站中）必须唯一；ID为文本类型，通常建议和其关联的工作流类型ID保持一致或对照关系，以便管理；在工作流设置器中，FormId用于将表单关联到相关的流程。
    {%endnote%}
* **isWorkflowForm**
    {% note success%}
        默认为是，也即默认为工作流表单；设置为工作流表单后，表单上可以关联和工作流相关的提交、审批控件以及审批历史列表的展示。
    {%endnote%}
* **Width**
    {% note success%}
        默认不设置情况下，表单那宽度固定为1200px宽，可以以px为单位设置绝对宽度，或按照百分比设置相对宽度；例如设置为100%，就代表这个表单展现的宽度跟随浏览器宽度展开。
    {%endnote%}
* **position**
    {% note success%}
        在表单中显示的提示信息的显示位置，包括top-left, top-right, top-center, bottom-left, bottom-right, bottom-center等几个选项。
    {%endnote%}
* **Global Js**
    {% note success%}
        填写自定义的JavaScript脚本文件地址和名称。
    {%endnote%}

### 表单控件

&emsp;&emsp;表单控件用于在表单上显示和输入数据，或对表单展现样式进行设置。表单控件分为3种表单组件、工作流组件、布局组件三种类型。

#### 控件共通属性

&emsp;&emsp;以下为表单控件通用属性列表：

* 隐藏
    {% note success%}
        该控件在表单上是否显示。
    {%endnote%}
* 内部名
    {% note success%}
        从关联列表的所有单行文本字段中选择需关联的字段名称。
    {%endnote%}
* 标签
  {% note success%}
      显示在组件上方的标签，如果在这里设置，则表单上显示的标签以这里设置为准；如果不设置，则以对应字段的名称，或标签多语言的设定为准。
  {%endnote%}
* 标签多语言
    {% note success%}
        多语言标签设置；此处设置的值为ModuleID.ResourceKey的形式；具体设置方式参见《多语言设置》的相关说明。
    {%endnote%}
* 禁用
    {% note success%}
        设置该字段在默认的新建表单页面上是否允许编辑。
    {%endnote%}
* 必填
    {% note success%}
        设置该字段是否必须填写。
    {%endnote%}
* 屏幕<480px所占列数
    {% note success%}
        在小屏幕情况下控件宽度（以列数计，屏幕以12列平分，12列代表满屏），默认为12列。
    {%endnote%}
* 480px<屏幕<640px所占列数
    {% note success%}
        在中等屏幕情况下控件宽度，默认为6列。
    {%endnote%}
* 屏幕>640px所占列数
    {% note success%}
        在大屏幕情况下的控件宽度，默认为4列。
    {%endnote%}
* 占位符
    {% note success%}
        在这里输入用于当前输入框中输入的数据提示信息，在表单上当输入框中没有数据时显示占位符信息，用户将光标放入输入框后占位符信息隐藏。
    {%endnote%}
* 前缀
    {% note success%}
        固定显示在输入框前部的文本字符信息。
    {%endnote%}
* 后缀
    {% note success%}
        固定显示在输入框后部的文本字符信息。
    {%endnote%}
* 默认值
    {% note success%}
        新建情况下默认输入的值。
    {%endnote%}

#### 表单组件

&emsp;&emsp;表单组件为和业务单据列表字段关联，用于输入和显示数据的各种组件。

##### 输入框

{% note info%}
    关联字段类型: 单行文本
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **最大字符**
    {% note success%}
        设置允许输入的最多字符数量。
    {%endnote%}

##### 多行文本

{% note info%}
    关联字段类型: 多行文本
    多行文本框在表单上显示的高度由列表字段属性的行数决定。
{%endnote%}

##### 下拉选择

{% note info%}
    关联字段类型: 选项
    下拉选择控件以下拉框的形式显示选项类型字段内容。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **下拉框宽度**
  {% note success%}
      默认值为0，下拉框宽度和控件本身宽度一致；设置大于0的数字，则代表以像素（px）为单位设置下拉框宽度。
  {%endnote%}

##### 选项组

{% note info%}
    关联字段类型: 选项
    以RadioButton组或CheckBox组的形式显示选项字段内容。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **默认值**
    {% note success%}
        设置新建状态下，选项组中哪些选项被选中状态，设置值为选项名称，多个选项名称使用分号分隔，例如：“选项一;选项三”。
    {%endnote%}
* **禁用值**
    {% note success%}
        设置新建状态下，选项组中哪些选项处于不允许选择的状态，设置值为选项名称，多个选项名称使用分号分隔，例如：“选项一;选项三”。
    {%endnote%}

##### 数字框

{% note info%}
    关联字段类型: 数字
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **千位分隔符**
    {% note success%}
        标记在数字框中的数字是否显示千位分隔符号。
    {%endnote%}
* **步进**
    {% note success%}
        单次点击数字框右侧的上下箭头时增加或减少的数字，默认为1。
    {%endnote%}

##### 是否选择

{% note info%}
    关联字段类型: 是/否
{%endnote%}

##### 日期选择

{% note info%}
    关联字段类型: 日期
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **格式**
  {% note success%}
      日期显示格式字符串，默认为：“YYYY/MM/DD”。
  {%endnote%}

##### 列表附件

{% note info%}
    关联字段类型: 列表附件
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **文件类型** 
    {% note success%}
        设置控件选择文档时的默认文档类型，使用MIME类型字符串设置, 多个类型使用逗号分隔, 常见的MIME类型包括:

      * .doc: application/msword
      * .docx: application/vnd.openxmlformats-officedocument.wordprocessingml.document
      * .pdf: application/pdf
      * .xls: application/vnd.ms-excel
      * .xlsx: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      * .ppt: application/vnd.ms-powerpoint
      * .pptx: application/vnd.openxmlformats-officedocument.presentationml.presentation
    {%endnote%}

##### 查阅项

{% note info%}
    关联字段类型: 查阅项
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **下拉框宽度**
    {% note success%}
        默认值为0，下拉框宽度和控件本身宽度一致；设置大于0的数字，则代表以像素（px）为单位设置下拉框宽度。
    {%endnote%}
* **加载数据**
    {% note success%}
        默认为No，也就是新建状态下不加载数据；设置为Yes时在新建状态下将加载数据。
    {%endnote%}
* **最大查询条数**
  {% note success%}
      在加载数据设置为Yes的情况下，最多加载多少条数据供选择，默认值为200。
  {%endnote%}
* **数据视图**
    {% note success%}
        选择查阅项关联的列表视图，加载数据将根据该列表视图的数据过滤条件进行加载。
    {%endnote%}
* **过滤条件Caml**
    {% note success%}
        过滤数据的Caml语句，如果设置了Caml则忽略数据视图的设定。
    {%endnote%}

##### 高级查阅项

{% note info%}
    关联字段类型: 查阅项
    高级查阅项可以在弹出窗口中对查阅项内容进行关键字搜索，并从搜索结果中进行选择。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **加载数据**
    {% note success%}
        默认为No，也就是新建状态下不加载数据；设置为Yes时在新建状态下将加载数据。
    {%endnote%}
* **异步查询**
    {% note success%}
        是否在页面加载时同时加载数据，如果设定为No，则在页面加载时同时加载数据；如果设置为Yes，则仅在搜索时才根据搜索条件去获取和加载数据（如果加载数据和异步查询同时设定为Yes时，忽略加载数据的选项不加载数据）。
    {%endnote%}
* **弹出内容宽度**
    {% note success%}
        弹出窗口的宽度，以px为单位。
    {%endnote%}
* **弹出内容高度**
    {% note success%}
        弹出窗口的高度，以px为单位。
    {%endnote%}
* **最大查询条数**
    {% note success%}
        最多每次查询出来的记录数量，默认值为200。
    {%endnote%}
* **列表显示**
    {% note success%}
        高级查阅项弹出的列表显示样式
        * Justified：列宽根据内容自适应
        * Fixed column：列宽固定
    {%endnote%}
* **列最小宽度**
    {% note success%}
        弹出列表每列的最小宽度设置，整数设置，以px为单位，多列设置以逗号分隔。
    {%endnote%}
* **列最大宽度**
    {% note success%}
        弹出列表每列的最大宽度设置，整数设置，以px为单位，多列设置以逗号分隔。
    {%endnote%}
* **紧凑模式**
    {% note success%}
        设置为Yes或No，分别代表弹出的数据列表行高较紧凑且无行分隔线，或行高较宽松且有行间分隔线。
    {%endnote%}
* **显示视图**
    {% note success%}
        设置查阅项关联的数据列表视图，根据该视图确定弹出列表显示的数据字段。
    {%endnote%}
* **数据视图**
    {% note success%}
        选择查阅项关联的列表视图，加载数据将根据该列表视图的数据过滤条件进行加载。
    {%endnote%}
* **过滤条件Caml**
    {% note success%}
        过滤数据的Caml语句，如果设置了Caml则忽略数据视图的设定。
    {%endnote%}
* **异步查询字段集**
    {% note success%}
        如果异步查询设置为Yes，在这里可以设置搜索时从那些字段进行搜索，如果不设置则默认从显示视图中的所有显示字段进行搜索。
    {%endnote%}

#### 工作流组件

&emsp;&emsp;如果当前设计的表单是工作流表单，则工作流组件可以使用在当前表单上。工作流组件用于在表单上显示和工作流相关的信息和操作。

##### 工作流字段

{% note info%}
    工作流字段信息由系统自动生成，用户不可修改；在表单设计器上通过“内部名”列表选择并设置与该工作流字段关联的工作流信息，常用的工作流信息包括：
    * Application ID – 工作路编号；
    * Applicant – 申请人姓名；
    * Submission Time – 流程提交时间；
    * Application Status – 流程状态；
{%endnote%}

##### 审批控件

{% note info%}
    对于工作流表单，需要将审批控件放到表单上，在审批用户的界面上才能看到审批选项和流程提交按钮。审批控件可以放在表单的任何地方，通常放在表单的开头或结尾处。
{%endnote%}

##### 审批历史

{% note info%}
    审批历史列表中显示当前流程从启动开始的审批历史信息。必须选择一个显示视图才能正常显示审批历史。显示视图是从SSW_WorkflowTask列表的视图中选择。
{%endnote%}

#### 布局组件

&emsp;&emsp;布局组件包含表单子表，表头，标签和标签组等和表单页面显示状态设置有关的组件。

##### 标签

{% note info%}
    通常可以使用标签将表单的业务或逻辑相关的组件管理在相同的标签下，并使用标签的标题对标签下的组件进行描述，以便表单用户更好地理解和操作。
{%endnote%}

##### 标签组

{% note info%}
    标签组可以用来将表单上的多个标签组织起来，在同一个时间只显示其中一个标签下的内容，用户可以点击标签切换表单页面上显示的标签内容。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **组头类型**
    {% note success%}
        * Links: 显示为下划线链接样式。
        * Tabs: 显示为标签样式。
    {%endnote%}
* **默认选中项**
    {% note success%}
        输入需要在表单上默认显示的标签名称；留空则默认显示第一个标签。
    {%endnote%}
* **颜色**
    {% note success%}
        输入颜色名称或16进制编号，显示为标签组的编号。
    {%endnote%}

##### 子表

{% note info%}
    子表控件用于显示和管理和当前表单关联的子表信息。
    在子表列表上点击 {% label danger@新增%} 按钮，或双击子表列表，可以在弹出的子表内容显示/编辑窗口上对子表表单进行设计。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **列表显示**
  {% note success%}
      * Justified（按内容宽度自适应）。
      * FixedColumns（固定列宽）。
  {%endnote%}
* **列表最大显示行数**
    {% note success%}
        子表在页面上最多显示的行数，超过该行数的记录将用滚动条形式向下滚动显示。
    {%endnote%}
* **关联列表**
    {% note success%}
        从当前网站的所有列表中选择与当前表单关联的子表列表名称。
    {%endnote%}
* **关联列表视图**
    {% note success%}
        子表列表显示视图。
    {%endnote%}
* **关联列表导入视图**
    {% note success%}
        子表列表在表单上导入使用的视图。
    {%endnote%}
* **关联列表导出视图**
    {% note success%}
        子表列表在表单上导出使用的视图。
    {%endnote%}
* **面板类型**
    {% note success%}
        在表单上对子表内容进行展示和编辑的弹出窗口类型。
    {%endnote%}
* **日期格式**
    {% note success%}
        子表显示日期的格式，默认值为：YYYY/MM/DD。
    {%endnote%}
* **弹出框内容标题**
    {% note success%}
        弹出框标题下方显示的副标题。
    {%endnote%}
* **弹出框标题**
    {% note success%}
        弹出框上方显示的标题。
    {%endnote%}
* **排序字段**
    {% note success%}
        子表显示的排序字段名称，如果有多个字段则以逗号分隔
    {%endnote%}
* **是否降序**
    {% note success%}
        是否以排序字段的降序排列。
    {%endnote%}

##### HTML容器

{% note info%}
    HTML容器默认为宽度占12列的空白占位符号，可以通过自定义宽度、高度实现对于表单控件排列的灵活调整。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **内容**
    {% note success%}
        可写入HTML脚本用于显示固定信息。
    {%endnote%}

##### 表头

{% note info%}
    表头控件用于对表单的表头显示和按钮控件进行自定义，如果表单上不放表头控件，则显示默认表头信息。其中，表头显示的标题默认为工作流版本的标题。表头默认包含的按钮包括：撤回、终止、提交、保存、取消。
    如果在表单上放置了表头控件，则标题需要自定义写入，并在表头上放置工具栏和工具栏按钮，以实现对表单上包含的按钮的灵活定义。
{%endnote%}

##### 工具栏

{% note info%}
    用于承载工具栏按钮的容器。
{%endnote%}

##### 工具栏按钮

{% note info%}
    可自定义表单上需要显示和使用的按钮。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **按钮类型**
    {% note success%}
        * ReCall – 召回按钮，在流程启动后，当流程停留在允许召回的节点上时，如果流程申请人打开流程表单则显示该按钮；点击这个按钮可以将流程收回到启动节点，供申请人修改后重新提交。
        * Terminate – 终止按钮，当流程被拒绝或收回到启动节点时，如果流程申请人打开流程表单则显示该按钮；点击这个按钮可以将流程设置为终止状态，流程终止后所有未完成的任务均被设置为取消状态。
        * 提交按钮，工作流表单在新建和审批处理状态下显示该按钮，点击这个按钮可以将流程单据信息提交到审批流程中进行处理。
        * 保存按钮，工作流表单在新建和草稿编辑状态下显示该按钮，点击这个按钮可以将流程单据信息保存到系统中并关闭当前的编辑页面。
        * 取消或返回按钮，在新建、编辑或审批处理状态下，点击该按钮将提示用户是否取消当前的操作，如果确定则不作任何保存并关闭表单；在显示状态的表单上点击该按钮，不做任何提示直接关闭表单
        * 空 – 不选择按钮类型则为自定义按钮。
    {%endnote%}
* **颜色**
    {% note success%}
        自定义按钮的颜色，不设置则默认显示为蓝色。
    {%endnote%}
* **Hover颜色**
    {% note success%}
        自定义鼠标经过按钮时显示的颜色。
    {%endnote%}
* **关键字**
    {% note success%}
        自定义按钮关键字，用于表单自定义脚本引用。
    {%endnote%}
* **名称**
    {% note success%}
        自定义按钮名称。
    {%endnote%}
* **名称多语言**
    {% note success%}
        如果需要以多语言形式显示按钮名称，则在这里输入资源文件的ModuleID.ResourceKey。
    {%endnote%}

##### 子表工具栏

{% note info%}
    用于承载子表工具栏按钮的容器。
{%endnote%}

##### 子表工具栏按钮

{% note info%}
    在子表上方显示和使用的按钮。
{%endnote%}
&emsp;&emsp;此组件有以下属性：

* **按钮类型**
    {% note success%}
        * New – 子表新建按钮。
        * Edit – 子表编辑按钮。
        * Delete – 子表删除按钮。
        * Import – 子表导入按钮。
        * Export – 子表导出按钮。
        * 空 – 自定义按钮。
    {%endnote%}
* **图标**
    {% note success%}
        可自定义按钮前显示的图标，图标名称参照下面的链接：https://developer.microsoft.com/en-us/fabric#/styles/web/icons 。
    {%endnote%}
* **关键字**
    {% note success%}
        自定义按钮关键字，用于表单自定义脚本引用。
    {%endnote%}
* **名称**
    {% note success%}
        自定义按钮名称。
    {%endnote%}
* **名称多语言**
    {% note success%}
        如果需要以多语言形式显示按钮名称，则在这里输入资源文件的ModuleID.ResourceKey。
    {%endnote%}

### 自定义样式和脚本

&emsp;&emsp;表单设计器支持自定义样式和脚本开发，在表单设计其中点击『css文件上传』或『js文件上传』，选择自定义的css文件或js文件并上传到系统中。

### 表单设计和保存

&emsp;&emsp;在表单设计器中，通过选择列表和表单打开已经存在的表单后，根据业务需求使用表单控件组合构成表单样式，点击表单设计器上方的『保存表单』按钮，保存成功后页面上将显示“保存表单成功”的提示信息，如下图所示。
{% fullimg images/aportal-2020-04-02-10-02-00.png,  class, 50%,50% %}
&emsp;&emsp;表单保存成功后，在引用表单的流程或其他列表中重新打开表单，就可以看到修改后的表单样式。