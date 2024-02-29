// (C) 2024 GoodData Corporation
module.exports = {
    "rulesDirectory": ["./", "../../tslint-microsoft-contrib"],
    "extends": [
        "tslint:latest",
        "tslint-eslint-rules",
        "tslint-react",
    ],
    "rules": {
        "arrow-parens": false, // https://palantir.github.io/tslint/rules/arrow-parens/ disable here and set correctly via "ter-arrow-parens" rule below
        "file-header": [true, "^ \\(C\\) \\d{4}(-\\d{4})? GoodData Corporation$"], // https://palantir.github.io/tslint/rules/file-header/
        "jsx-no-multiline-js": false, // https://github.com/palantir/tslint-react#rules
        "max-classes-per-file": [false], // https://palantir.github.io/tslint/rules/max-classes-per-file/
        "no-implicit-dependencies": [true, "dev"], // https://palantir.github.io/tslint/rules/no-implicit-dependencies/
        "no-parameter-reassignment": true, // https://palantir.github.io/tslint/rules/no-parameter-reassignment/
        "no-submodule-imports": false, // https://palantir.github.io/tslint/rules/no-submodule-imports/
        "no-shadowed-variable": false, // https://palantir.github.io/tslint/rules/no-shadowed-variable/
        "no-this-assignment": false, // https://palantir.github.io/tslint/rules/no-this-assignment/
        "object-curly-spacing": [true, "always"], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/objectCurlySpacingRule.md
        "object-literal-sort-keys": false, // https://palantir.github.io/tslint/rules/object-literal-sort-keys/
        "ordered-imports": false, // https://palantir.github.io/tslint/rules/ordered-imports/
        "quotemark": [true, "single", "avoid-template", "jsx-double"], // https://palantir.github.io/tslint/rules/quotemark/
        "ter-arrow-parens": [true, "as-needed", { "requireForBlockBody": true }], // https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowParensRule.md
        "trailing-comma": [true, { "multiline": "never", "singleline": "never" }], // https://palantir.github.io/tslint/rules/trailing-comma/
        "variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case", "allow-leading-underscore"], // https://palantir.github.io/tslint/rules/variable-name/
        "no-banned-terms": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-delete-expression": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-document-domain": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-disable-auto-sanitization": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-duplicate-parameter-names": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-exec-script": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-octal-literal": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-string-based-set-immediate": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-string-based-set-interval": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-string-based-set-timeout": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-eval": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-document-write": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-http-string": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "no-inner-html": true, // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
        "react-no-dangerous-html": true // https://github.com/Microsoft/tslint-microsoft-contrib/wiki/TSLint-and-the-Microsoft-Security-Development-Lifecycle
    }
};
