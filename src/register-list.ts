import Register, { Dset } from "./planet-register";
const isRingOrDefaultCity = (e: string) => e.startsWith("district_rw") || e == "district_city";
const noRingOrHab = (e: string) => !e.startsWith("district_rw") && !e.startsWith('district_hab');
// 非居住站或环的语法糖
function useSimple(...args: Dset) {
    Register.addConvertTo({ districts: args, onlyIf: noRingOrHab });
}
// 环的语法糖
function useRing(...args: Dset) {
    Register.addConvertTo({ districts: args, onlyIf: isRingOrDefaultCity });
}
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
);*/
// 原版格式塔上环每个月刷没首府的bug
Register.addConvertTo({ districts: ['district_rw_hive'], onlyIf: e => e == 'district_city' });
Register.addConvertTo({ districts: ['district_rw_nexus'], onlyIf: e => e == 'district_city' });

// CG INN
useSimple(
    'district_holylight_city',
    'district_holylight_reserve',
    'district_holylight_private',
    'district_holylight_reserve'
);
// CG INN ring
useRing(
    'district_holylight_ring_world_city',
    'district_holylight_ring_world_reserve',
    'district_holylight_ring_world_private',
    "district_holylight_ring_world_public",
    'district_holylight_ring_world_private',
    'district_holylight_ring_world_reserve'
);

// CG SUC
useSimple(
    'district_prostitution_city',
    'district_prostitution_reserve',
    'district_prostitution_private',
    'district_prostitution_public'
);
// CG SUC city
useSimple('district_sex_city_prostitute');
// CG SUC dragon netst
useSimple('district_dragon_nest_city');
// CG SUC ring
useRing(
    'district_prostitution_ring_world_city',
    'district_prostitution_ring_world_private',
    'district_prostitution_ring_world_reserve',
    'district_prostitution_ring_world_house',
    'district_prostitution_ring_world_public',
    'district_prostitution_ring_world_reserve'
);

// CG SOS
useSimple('district_depraved_tentacle_city',);

// wsg sh
useSimple(
    "district_sh_city",
    "district_sh_generator_uncapped",
    "district_sh_mining_uncapped",
    "district_sh_foundry_shpc",
    "district_sh_pantsu_shpc",
    "district_sh_science_shpc",
);

// wsg sh ring
useRing(
    'district_rw_sh_city',
    'district_rw_sh_alloys',
    'district_rw_sh_goods'
);

// wsg uf
useSimple("district_uf_housing");
useSimple("district_auto_uf_housing");

// wsg uf ring
useRing(
    'district_rw_uf_city',
    'district_rw_uf_alloys',
    'district_rw_uf_science'
);
useRing(
    'district_rw_auto_uf_city',
    'district_rw_auto_uf_alloys',
    'district_rw_auto_uf_science'
);

// wsg wg
useSimple("district_arcology_wsg_housing");

// wsg wg ring
useRing(
    'district_rw_wsg_city',
    'district_rw_wsg_alloys',
    'district_rw_wsg_science'
);
useRing(
    'district_rw_water_housing',
    'district_rw_water_generator',
    'district_rw_water_food',
    'district_rw_water_ktv',
);

// wsg wg 🔨
useSimple("district_wg_hive_world_housing");
useSimple("district_wg_forge");

