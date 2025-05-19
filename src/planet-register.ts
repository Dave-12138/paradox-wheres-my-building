type DistrictName = string;
type Dset = [city: DistrictName, generator?: DistrictName, mining?: DistrictName, farming?: DistrictName, industrial?: DistrictName, science?: DistrictName];
const list: Dset[] = [];
const Register = {
    /**
     * 
     * @param ds 区划名称，首个参数会加进“有行星首府的区划”的convert_to，其后参数以此类推
     */
    addConvertTo(...ds: Dset) {
        list.push(ds);
    },
    list
}
export default Register;