import FlexSearch from "../../flexsearch.js";
import { regex } from "../../common.js";

export const rtl = false;
export const tokenize = "";
export default {
    encode: encode,
    rtl: rtl
}

// Charset Normalization

const regex_whitespace = /[\W_]+/,
    //regex_strip = regex("[^a-z0-9 ]"),
    regex_a = regex("[àáâãäå]"),
    regex_e = regex("[èéêë]"),
    regex_i = regex("[ìíîï]"),
    regex_o = regex("[òóôõöő]"),
    regex_u = regex("[ùúûüű]"),
    regex_y = regex("[ýŷÿ]"),
    regex_n = regex("ñ"),
    regex_c = regex("[çc]"),
    regex_s = regex("ß"),
    regex_and = regex(" & ");

const pairs = [

    regex_a, "a",
    regex_e, "e",
    regex_i, "i",
    regex_o, "o",
    regex_u, "u",
    regex_y, "y",
    regex_n, "n",
    regex_c, "k",
    regex_s, "s",
    regex_and, " and "
    //regex_whitespace, " "
    //regex_strip, ""
];

/**
 * @param {string} str
 */

export function encode(str, self){

    return /** @type {FlexSearch} */ (self || this).pipeline(

        /* string: */ str.toLowerCase(),
        /* normalize: */ pairs,
        /* split: */ regex_whitespace,
        /* collapse: */ false
    );
}
