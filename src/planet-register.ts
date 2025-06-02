export type DistrictName = string;
export type Dset = [city: DistrictName, generator?: DistrictName, mining?: DistrictName, farming?: DistrictName, industrial?: DistrictName, science?: DistrictName];

export type ConvertRule = {
    /**
     * 区划名称，首个参数会加进“有行星首府的区划”的convert_to，其后参数以此类推
     */
    districts: Dset,
    /**
     * 当有这项时，如果这项函数返回值为 false ，则不添加
     * @param vanillaName 原版区划名
     * @returns 是否添加
     */
    onlyIf?: (vanillaName: DistrictName) => boolean
};
const list: ConvertRule[] = [];
function addConvertTo(rule: ConvertRule): void;
/**
 * 
 * @param rule 区划名称，首个参数会加进“有行星首府的区划”的convert_to，其后参数以此类推
 */
function addConvertTo(...rule: Dset): void;
function addConvertTo(...rule: [ConvertRule] | Dset) {
    if (rule[0] instanceof Object) {
        list.push(rule[0]);
    } else {
        const districts = rule as Dset;
        list.push({ districts });
    }
}
const Register = {
    addConvertTo,
    list
}
export default Register;

const isHabOrDefaultCity = (e: string) => e.startsWith("district_hab") || e == "district_city" || e == "district_mindlink";
const isRingOrDefaultCity = (e: string) => e.startsWith("district_rw") || e == "district_city" || e == "district_mindlink";
const noRingOrHab = (e: string) => !e.startsWith("district_rw") && !e.startsWith('district_hab');
// 非居住站或环的语法糖
export function useSimple(...args: Dset) {
    Register.addConvertTo({ districts: args, onlyIf: noRingOrHab });
}
// 环的语法糖
export function useRing(...args: Dset) {
    Register.addConvertTo({ districts: args, onlyIf: isRingOrDefaultCity });
}
export function useHab(...args: Dset) {
    Register.addConvertTo({ districts: args, onlyIf: isHabOrDefaultCity });
}