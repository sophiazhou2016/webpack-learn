## 引入方式可能有很多种
### 在output里面配置library: 'library'就挂载到了全局进入使用script标签引入，libraryTarget: 'umd'可以兼容其他引入。
```
import library from 'library'

const library = require('library)

require(['library'], function() {})

<script src="library"></script>

```