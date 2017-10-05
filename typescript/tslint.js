module.exports = {
    "extends": [
        "tslint:latest",
        "tslint-eslint-rules",
        "tslint-react"
    ],
    "rules": {
        "arrow-parens": false, // https://palantir.github.io/tslint/rules/arrow-parens/ disable here and set correctly via "ter-arrow-parens" rule below
        "ban-types": [
            true,
            ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
            ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
            ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
            ["String", "Avoid using the `String` type. Did you mean `string`?"],
            ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
        ], // https://palantir.github.io/tslint/rules/ban-types/
        "jsx-no-multiline-js": false, // https://github.com/palantir/tslint-react#rules
        "max-classes-per-file": [false], // https://palantir.github.io/tslint/rules/max-classes-per-file/
        "no-submodule-imports": false, // https://palantir.github.io/tslint/rules/no-submodule-imports/
        "no-shadowed-variable": false, // https://palantir.github.io/tslint/rules/no-shadowed-variable/
        "no-this-assignment": false, // https://palantir.github.io/tslint/rules/no-this-assignment/
        "no-use-before-declare": true, // https://palantir.github.io/tslint/rules/no-use-before-declare/
        "object-literal-sort-keys": false, // https://palantir.github.io/tslint/rules/object-literal-sort-keys/
        "ordered-imports": false, // https://palantir.github.io/tslint/rules/ordered-imports/
        "quotemark": [true, "single", "avoid-template", "jsx-double"], // https://palantir.github.io/tslint/rules/quotemark/
        "ter-arrow-parens": [true, "as-needed", { "requireForBlockBody": true }], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowParensRule.md
        "trailing-comma": [true, { "multiline": "never", "singleline": "never" }] // https://palantir.github.io/tslint/rules/trailing-comma/
    }
};
