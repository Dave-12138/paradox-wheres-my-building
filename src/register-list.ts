import Register from "./planet-register";

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
// CG SUC ring
Register.addConvertTo(
    'district_prostitution_ring_world_city',
    'district_prostitution_ring_world_private',
    'district_prostitution_ring_world_reserve',
    'district_prostitution_ring_world_house',
    'district_prostitution_ring_world_public',
    'district_prostitution_ring_world_reserve'
);
