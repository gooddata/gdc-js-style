module.exports = {
    rules: {
        'no-lodash-bindall': require('./src/rules/no-lodash-bindall'),
        'no-react-addons-test-utils': require('./src/rules/no-react-addons-test-utils'),
        'no-object-assign': require('./src/rules/no-object-assign')
    },
    configs: {
        recommended: {
            'gooddata/no-lodash-bindall': 2,
            'gooddata/no-react-addons-test-utils': 2,
            'gooddata/no-object-assign': 2
        }
    }
};
