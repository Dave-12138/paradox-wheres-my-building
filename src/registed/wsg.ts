import { useRing, useSimple } from "../planet-register";

// ====wsg 1747099270====

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
