import FlexSearch from"../../flexsearch.js";export const rtl=!1;export const tokenize="strict";export default{encode:encode,rtl:!1,tokenize:"strict"};const regex=/[\x00-\x7F]/g;export function encode(a){return this.pipeline(a.replace(regex,""),!1,"",!1)}