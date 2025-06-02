/* 
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
如果没有onlyIf，可简化为
Register.addConvertTo(
    '城市区划',
    '发电区划',
    '采矿区划',
    '农业区划',
    '工业区划',
    '研究区划'
);
不是环或居住站 语法糖：
useSimple(
    '城市区划',
    '发电区划',
    '采矿区划',
    '农业区划',
    '工业区划',
    '研究区划'
);
*/

import "./vanilla"
import "./CG"
import "./wsg"
import "./swgs"
import "./ngnl"
// import "./spth"