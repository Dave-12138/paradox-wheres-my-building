import { useRing, useSimple } from "../planet-register";

// CG INN
useSimple(
    'district_holylight_city',
    'district_holylight_private',
    'district_holylight_public',
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
