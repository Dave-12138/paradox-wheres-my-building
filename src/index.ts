import fs from "node:fs";
import path from "node:path";
import Register from "./planet-register";
import "./registed/index"
import evd from '../env.json'
const args = [...process.argv];
const params = args.reduce((pv, v) => {
    const [k, r] = v.split('=');
    pv[k] = r ?? true;
    return pv;
}, {})
const vanillaPath = path.join(evd.gamePath, 'common/districts');
const targetPath = path.join(evd.modPath, 'common/districts');
const vanilla = [
    "00_special_districts.txt",
    "00_urban_districts.txt",
    "01_arcology_districts.txt",
    "02_rural_districts.txt",
    "03_habitat_districts.txt",
    "04_ringworld_districts.txt",
    "05_wilderness_districts.txt",
]
// const van = {
//     normal: [
//         "00_urban_districts.txt",
//         "02_rural_districts.txt",
//     ],
//     habitat: [
//          "03_habitat_districts.txt",
//     ],
//     ring: [
//         "04_ringworld_districts.txt",
//     ]
// }
const converPatt = /(?<=convert_to = \{)[\s\w\n]+(?=\})/;
class District {
    name: string;
    convert_to: string[] | undefined;
    text: string;
    pos: number;
    moded: boolean;
    constructor(obj: string | District) {
        if (obj instanceof Object) {
            Object.assign(this, obj);
        } else if (typeof obj === "string") {
            const name: string = obj.match(/^\w+/)?.[0] ?? "";
            const convert_to = obj.match(converPatt)?.[0].split('\n').map(e => e.trim()).filter(e => e.length > 0);
            this.text = obj;
            this.name = name;
            this.convert_to = convert_to;
        }
        this.pos = this._calcPos();
        this.moded = false;
    }
    _calcPos() {
        // if (!this.convert_to) {
        //     return undefined;
        // }
        if (this.text.includes('slot_city_government'))
            return 0;
        const ruralNames = [['generator', 'energy'], ['mining'], ['farming'], ['industrial'], ['science']]
        for (let i = 1; i < 6; i++) {
            if (this._any((str: string) => str.endsWith('_' + i)) || this._any(str => ruralNames[i - 1].some(k => str.includes(k)))) {
                return i;
            }
        }

        return -1;
    }
    /**@type {string} */
    get result() {
        const gk = `inline_script = districts/PWMB_convert_to/${this.name} `;
        if (this.text.includes('convert_to'))
            return this.text.replace(/(?:convert_to = \{)[\s\w\n]+(?:\})/, gk);
        return this.text.replace(/(?=\n\})/, '\n\t' + gk);
        // return this.text.replace(converPatt, this.convert_to?.reduce((pv, v) => `${pv}\t${v}\n\t`, "\n\t") ?? "");
    }
    _any(s: ((value: string) => boolean)): boolean {
        return s(this.name) || !!this.convert_to?.some(s);
    }
}

const variables: { [k: string]: string | number } = {};
/**
 * 从原版读取
 * @param filename 
 * @returns 
 */
function readDistrict(filename: string): District[] {
    const text = fs.readFileSync(path.join(vanillaPath, filename), "utf8").replace(/#.*/g, '');
    const list: District[] = [];
    const districtPatt = /(?<=\n|^)\w+ = \{[\s\S\n]+?\n\}/g;
    text.match(districtPatt)?.forEach(e => list.push(new District(e)));
    // 顺便把变量读了
    [...text.matchAll(/(?<=^|\n)@(\w+) = (\d+)/g)].forEach(([_, k, v]) => {
        if (variables[k] === undefined)
            variables[k] = v;
    })
    return list;
}
// const test = fs.readFileSync(path.join(vanillaPath, "01_arcology_districts.txt"), "utf8");
const sumList = vanilla.map(readDistrict).flat()
    .filter(e => /* !!e.convert_to && */ /*这里筛掉了 always=no*/ !/potential = \{\n\s+always = no/.test(e.text) && !e.text.includes('slot_cosmogenesis_empty'));
// log
// sumList.forEach(e => console.log((({ pos, name, convert_to }) => JSON.stringify({ pos, name, convert_to }))(e), '\n===================='));
// 插入
sumList.forEach(ds => Register.list.forEach(ns => {
    if (ns.districts[ds.pos] && (!ns.onlyIf || ns.onlyIf(ds.name))) {
        if (ds.convert_to === undefined) {
            ds.convert_to = [ns.districts[ds.pos] ?? ""];
        } else {
            ds.convert_to?.push(ns.districts[ds.pos] ?? "");
        }
        ds.moded = true;
    }
}));
// 合并
const rst = Object.keys(variables).map(k => `@${k} = ${variables[k]}\n`).join('') + sumList.filter(d => d.moded).reduce((pv, v, i) => pv + v.result + '\n\n', "")
// log
// console.log(rst);

// 写入
if (!params['debug']) {
    fs.writeFileSync(path.join(targetPath, 'PWMB_overwrite_districts.txt'), rst, { encoding: "utf-8", flag: "w+" });

    sumList.filter(d => d.moded).forEach(d => {
        const inlineScriptPath = path.join(evd.modPath, 'common/inline_scripts/districts/PWMB_convert_to', d.name + '.txt');
        fs.writeFileSync(inlineScriptPath, `convert_to = {\n\t${d.convert_to?.join('\n\t')}\n}`, { encoding: "utf-8", flag: "w+" });
    });
} else {
    fs.writeFileSync(path.join('.', `log-${Date.now()}.txt`), rst, { encoding: "utf-8", flag: "w+" });


    function conflKey(d: District) {
        return Array.from(d.convert_to ?? []).sort().join('\n');
    }
    const reversMap: { [k: string]: string[] } = {}
    sumList.filter(d => d.moded).forEach(d => {
        const ck = conflKey(d);
        if (reversMap[ck]) {
            reversMap[ck].push(d.name);
        } else {
            reversMap[ck] = [d.name];
        }
    });
    Object.keys(reversMap).forEach(v => {
        console.log(reversMap[v].join(' '));
        console.log('-----------------------------------');
        console.log(v);
        console.log('===================================');
    })
}