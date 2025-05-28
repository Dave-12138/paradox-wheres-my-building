type DistrictName = string;
type Dset = [city: DistrictName, generator?: DistrictName, mining?: DistrictName, farming?: DistrictName, industrial?: DistrictName, science?: DistrictName];
type ConvertRule = { districts: Dset, onlyIf?: (vanillaName: DistrictName) => boolean };
const list: ConvertRule[] = [];
const Register = {
    /**
     * 
     * @param ds 区划名称，首个参数会加进“有行星首府的区划”的convert_to，其后参数以此类推
     */
    addConvertTo(...rule: [ConvertRule] | Dset) {
        if (rule[0] instanceof Object) {
            list.push(rule[0]);
        } else {
            const districts = rule as Dset;
            list.push({ districts });
        }
    },
    list
}
export default Register;