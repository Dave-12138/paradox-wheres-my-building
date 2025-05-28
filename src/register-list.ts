import Register from "./planet-register";

// Register.addConvertTo({
//     districts: [
//         '城市区划',
//         '发电区划（城市1）',
//         '采矿区划（城市2）',
//         '农业区划（城市3）',
//         '工业区划（未使用）',
//         '研究区划（未使用）'
//     ],
//     onlyIf: 原版区划名 => false
// });
// 如果没有onlyIf，可简化为
// Register.addConvertTo(
//     '城市区划',
//     '发电区划（城市1）',
//     '采矿区划（城市2）',
//     '农业区划（城市3）',
//     '工业区划（未使用）',
//     '研究区划（未使用）'
// );
// 原版格式塔上环每个月刷没首府的bug
Register.addConvertTo({ districts: ['district_rw_hive'], onlyIf: e => e == 'district_city' });
Register.addConvertTo({ districts: ['district_rw_nexus'], onlyIf: e => e == 'district_city' });
// CG INN
Register.addConvertTo(
    'district_holylight_city',
    'district_holylight_reserve',
    'district_holylight_private',
    'district_holylight_reserve'
);
// CG INN ring
Register.addConvertTo(
    'district_holylight_ring_world_city',
    'district_holylight_ring_world_reserve',
    'district_holylight_ring_world_private',
    "district_holylight_ring_world_public",
    'district_holylight_ring_world_private',
    'district_holylight_ring_world_reserve'
);

// CG SUC
Register.addConvertTo(
    'district_prostitution_city',
    'district_prostitution_reserve',
    'district_prostitution_private',
    'district_prostitution_public'
);
// CG SUC city
Register.addConvertTo(
    'district_sex_city_prostitute',
);
// CG SUC dragon netst
Register.addConvertTo(
    'district_dragon_nest_city',
);
// CG SUC ring
Register.addConvertTo(
    'district_prostitution_ring_world_city',
    'district_prostitution_ring_world_private',
    'district_prostitution_ring_world_reserve',
    'district_prostitution_ring_world_house',
    'district_prostitution_ring_world_public',
    'district_prostitution_ring_world_reserve'
);

// CG SOS
Register.addConvertTo(
    'district_depraved_tentacle_city',
);
