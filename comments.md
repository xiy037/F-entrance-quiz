### 完成度：


__Details:__

- \- 没有实现分组之后，未分组学员列表也需要同步更新的功能
- \- 点击添加学员按钮之后的UI行为和需求不一致
- \- 没有实现分组之后刷新页面，之前的分组信息保持不变的功能

### 测试：


__Details:__



### 知识点：


__Details:__

- \- 分组应该放到后端去做，而不是前端
- \- groupId,或者说是其他的任何ID都不应该在前端生成
- \- 不应该使用index作为列表元素的key

### 工程实践：


__Details:__

- \- /service和/components文件夹应该放到/src目录下而不是App下面
- \- 可以把http://localhost:8080提出一个公共的变量
- \- getGroupedStudents命名不够准确，因为你实际上返回的是group而不是被分组之后的students
- \- sendNewStudent改为newStudent
- \- console.log不应该被提交上去
- \- 这个组件太不单一职责了，应该再继续划分子组件

### 综合：


__Details:__
+ \+ 有正确使用SASS的变量和嵌套，不错
- \- 有划分组件的意识，但是划分的粒度和文件夹结构组织都不对

