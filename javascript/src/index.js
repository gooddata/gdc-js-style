const noLodashBindAll = require('./rules/no-lodash-bindall');
const noReactAddonsTestUtils = require('./rules/no-react-addons-test-utils');
const noObjectAssign = require('./rules/no-object-assign');

module.exports = {
    rules: {
        'no-lodash-bindall': noLodashBindAll,
        'no-react-addons-test-utils': noReactAddonsTestUtils,
        'no-object-assign': noObjectAssign
    },
    rulesConfig: {
        'no-lodash-bindall': 'error',
        'no-react-addons-test-utils': 'error',
        'no-object-assign': 'error'
    }
};
