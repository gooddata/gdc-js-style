module.exports = {
    "extends": [
        "tslint:latest",
        "tslint-eslint-rules",
        "tslint-react"
    ],
    "rules": {
        "arrow-parens": false, // https://palantir.github.io/tslint/rules/arrow-parens/ disable here and set correctly via "ter-arrow-parens" rule below
        "ban-types": false, // https://palantir.github.io/tslint/rules/ban-types/
        "jsx-no-multiline-js": false, // https://github.com/palantir/tslint-react#rules
        "max-classes-per-file": [false], // https://palantir.github.io/tslint/rules/max-classes-per-file/
        "no-use-before-declare": true, // https://palantir.github.io/tslint/rules/no-use-before-declare/
        "no-shadowed-variable": false, // https://palantir.github.io/tslint/rules/no-shadowed-variable/
        "object-literal-sort-keys": false, // https://palantir.github.io/tslint/rules/object-literal-sort-keys/
        "ordered-imports": false, // https://palantir.github.io/tslint/rules/ordered-imports/
        "quotemark": [true, "single", "avoid-template", "jsx-double"], // https://palantir.github.io/tslint/rules/quotemark/
        "ter-arrow-parens": [true, "as-needed", { "requireForBlockBody": true }], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowParensRule.md
        "trailing-comma": false // https://palantir.github.io/tslint/rules/trailing-comma/
    }
};
