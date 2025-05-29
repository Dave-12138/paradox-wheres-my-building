import Register from "../planet-register";

// 原版格式塔上环每个月刷没首府的bug
Register.addConvertTo({ districts: ['district_rw_hive'], onlyIf: e => e == 'district_city' });
Register.addConvertTo({ districts: ['district_rw_nexus'], onlyIf: e => e == 'district_city' });

