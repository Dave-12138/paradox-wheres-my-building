## 如何添加新区划转换

### 会用到的函数

```typescript
Register.addConvertTo({
    districts: [
        '城市区划',
        '发电区划（城市1）',
        '采矿区划（城市2）',
        '农业区划（城市3）',
        '工业区划（未使用，暂无效果）',
        '研究区划（未使用，暂无效果）'
    ],
    onlyIf: 原版区划名 => false
});
// 如果没有onlyIf，可简化为
Register.addConvertTo(
    '城市区划',
    '发电区划',
    '采矿区划',
    '农业区划',
    '工业区划',
    '研究区划'
);
// 不是环或居住站 语法糖：
useSimple(
    '城市区划',
    '发电区划',
    '采矿区划',
    '农业区划',
    '工业区划',
    '研究区划'
);
// 环世界的语法糖
useRing(
    '城市区段',
    '城市区段1',
    '城市区段2',
    '城市区段3'
 );
```
### 例子
如果你遇到了把原版星球改为xxxmod的星球A会丢建筑的问题，而星球A有四个区划分别叫做`district_A_city`、`district_A_urban1`、`district_A_urban2`、`district_A_urban3`

你需要在 `registed` 文件夹下新建一个文件 `xxx.ts` ，然后在里面写：
``` typescript
import { useRing, useSimple } from "../planet-register";
//      ⬇️这是mod名字和创意工坊编号
// ====xxxmod 123123123====
useSimple('district_A_city','district_A_urban1','district_A_urban2','district_A_urban3');
```
