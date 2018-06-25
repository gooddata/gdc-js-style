module.exports = {
    "parser": "babel-eslint",

    "plugins": ["react", "jest"],

    "extends": "airbnb",

    "env": {
        // I write for browser
        "browser": true,

        // in CommonJS
        "node": true,

        // jest
        "jest/globals": true
    },

    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],

        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L126-L134
        "max-len": ["error", 120, 4, {
            "ignoreUrls": true,
            "ignoreComments": false,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true
        }],

        "comma-dangle": [2, "never"],

        "global-require": [0],

        "arrow-body-style": [0],

        "import/no-extraneous-dependencies": [0],
        "import/no-named-as-default": [0],
        "import/prefer-default-export": [0],

        "react/prefer-stateless-function": [0],

        "jest/no-disabled-tests": 2,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2,
        "jest/valid-expect": 2,

        "function-paren-newline": 0,
        "object-curly-newline": 0,

        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0
    },

    "globals": {
        "DEBUG": false,
        "TESTING": false,
        "PRODUCTION": false,

        "define": false,
        "require": false
    }
};
