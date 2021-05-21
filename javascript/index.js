// (C) 2020 GoodData Corporation
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["jest", "header", "import", "no-only-tests"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // GoodData
        "header/header": [2, "line", { pattern: "^ \\(C\\) \\d{4}(-\\d{4})? GoodData Corporation$" }],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
        ],
        "@typescript-eslint/no-unused-vars": [2, { varsIgnorePattern: "^_.*$", argsIgnorePattern: "^_.*$" }],
        "@typescript-eslint/no-explicit-any": 2,
        "import/no-extraneous-dependencies": [2, { devDependencies: true }],
        "import/order": 2,
        "no-console": 2,
        
        // Test
        "jest/no-disabled-tests": 2,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2,
        "jest/valid-expect": 2,
        "no-only-tests/no-only-tests": ["error", { "block": ["fixture"], "focus": ["only"] }],

        // Security
        "no-caller": 2,
        "no-eval": 2,
        "no-delete-var": 2,
        "no-octal-escape": 2,
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    }
};
