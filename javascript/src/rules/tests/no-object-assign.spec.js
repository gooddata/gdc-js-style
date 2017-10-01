import { RuleTester } from 'eslint';
import rule from '../no-object-assign';

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    }
});

const errors = [{
    message: 'Object.assign is forbidden, use destructuring assignment instead.',
    type: 'ExpressionStatement'
}];

ruleTester.run('no-object-assign', rule, {
    valid: [
        'const newObj = {...a, ...b};'
    ],
    invalid: [
        {
            code: 'Object.assign({}, a, b);',
            errors
        },
        {
            code: 'Object.assign(a, b);',
            errors
        }
    ]
});
