module.exports = {
  "plugins": [
    // ["conditional-compile", {
    //   "define": {
    //     "DEBUG": false,
    //     "PROFILER": false,
    //     "POLYFILL": true,
    //     "SUPPORT_WORKER": true,
    //     "SUPPORT_ENCODER": true,
    //     "SUPPORT_CACHE": true,
    //     "SUPPORT_ASYNC": true,
    //     "SUPPORT_PRESET": true,
    //     "SUPPORT_SUGGESTION": true,
    //     "SUPPORT_SERIALIZE": true,
    //     "SUPPORT_INFO": true,
    //     "SUPPORT_DOCUMENT": true,
    //     "SUPPORT_WHERE": true,
    //     "SUPPORT_PAGINATION": true,
    //     "SUPPORT_OPERATOR": true,
    //     "SUPPORT_CALLBACK": true,
    //     "SUPPORT_LANG": false
    //   }
    // }],
    "babel-plugin-minify-constant-folding",
    "babel-plugin-minify-dead-code-elimination",
    "babel-plugin-minify-flip-comparisons",
    "babel-plugin-minify-guarded-expressions",
    "babel-plugin-minify-infinity",
    "babel-plugin-minify-mangle-names",
    "babel-plugin-minify-replace",
    "babel-plugin-minify-simplify",
    "babel-plugin-minify-type-constructors",
    "babel-plugin-transform-member-expression-literals",
    "babel-plugin-transform-merge-sibling-variables",
    "babel-plugin-transform-minify-booleans",
    "babel-plugin-transform-property-literals",
    "babel-plugin-transform-simplify-comparison-operators",
    "babel-plugin-transform-undefined-to-void",
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          node: 14
        }
      }
    ]
  ],
  "ignore": [
    "config.js",
    "bundle.js",
    "export.js"
  ],
  "minified": true,
  "compact": true,
  "comments": false
}
