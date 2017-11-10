import { RuleTester } from 'eslint';
import rule from '../no-object-assign';

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    }
});

const variableDeclarationErrors = [
    {
        message: 'Object.assign is forbidden, use destructuring assignment instead.',
        type: 'VariableDeclaration',
    }
];

const expressionStatementErrors = [
    {
        message: 'Object.assign is forbidden, use destructuring assignment instead.',
        type: 'ExpressionStatement',
    }
];

const returnStatementErrors = [
    {
        message: 'Object.assign is forbidden, use destructuring assignment instead.',
        type: 'ReturnStatement',
    }
]

ruleTester.run('no-object-assign', rule, {
    valid: [
        'const newObj = {...a, ...b};',
        'foo();',
        'const a = 1;',
        'let a;',
        'function a() { return; }',
        'function a() { return 1; }',
        'function a() { return 1 || 2; }',
        'function a() { return (1); }',
        'function a() { return (<div>a</div>); }',
    ],
    invalid: [
        {
            code: 'const c = Object.assign({}, a, b);',
            errors: variableDeclarationErrors
        },
        {
            code: 'let c = Object.assign(a, b);',
            errors: variableDeclarationErrors
        },
        {
            code: 'Object.assign(a, b);',
            errors: expressionStatementErrors
        },
        {
            code: `
                function test() {
                    return Object.assign(a, b);
                }
            `,
            errors: returnStatementErrors
        }
    ]
});
