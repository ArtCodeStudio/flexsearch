import FlexSearch from"../../flexsearch.js";export const rtl=!0;export const tokenize="";export default{encode:encode,rtl:!0};const split=/[\W_]+/;export function encode(a){return this.pipeline(a,!1,split,!1)}