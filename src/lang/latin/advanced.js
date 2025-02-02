import FlexSearch from "../../flexsearch.js";
import { regex, replace, collapse } from "../../common.js";
import { encode as encode_simple } from "./simple.js";

export const rtl = false;
export const tokenize = "";
export default {
    encode: encode,
    rtl: rtl
}

// Phonetic Normalization

const regex_ae = regex("ae"),
    regex_ai = regex("ai"),
    regex_ay = regex("ay"),
    regex_ey = regex("ey"),
    regex_oe = regex("oe"),
    regex_ue = regex("ue"),
    regex_ie = regex("ie"),
    regex_sz = regex("sz"),
    regex_zs = regex("zs"),
    regex_ck = regex("ck"),
    regex_cc = regex("cc"),
    regex_sh = regex("sh"),
    regex_th = regex("th"),
    regex_dt = regex("dt"),
    regex_ph = regex("ph"),
    regex_pf = regex("pf"),
    regex_ou = regex("ou"),
    regex_uo = regex("uo");

const pairs = [
    regex_ae, "a",
    regex_ai, "ei",
    regex_ay, "ei",
    regex_ey, "ei",
    regex_oe, "o",
    regex_ue, "u",
    regex_ie, "i",
    regex_sz, "s",
    regex_zs, "s",
    regex_sh, "s",
    regex_ck, "k",
    regex_cc, "k",
    regex_th, "t",
    regex_dt, "t",
    regex_ph, "f",
    regex_pf, "f",
    regex_ou, "o",
    regex_uo, "u"
];

export function encode(str, self, _skip_postprocessing){

    if(str){

        str = encode_simple(str, /** @type {FlexSearch} */ (self || this)).join(" ");

        if(str.length > 2){

            str = replace(str, pairs);
        }

        if(!_skip_postprocessing){

            if(str.length > 1){

                str = collapse(str);
            }

            if(str){

                str = str.split(" ");
            }
        }
    }

    return str;
}
