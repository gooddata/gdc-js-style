import { RuleTester } from 'eslint';
import rule from '../no-lodash-bindall';

const ruleTester = new RuleTester();

const errors = [{
    message: 'bindAll is forbidden (no function names in string). Use this.myFunction.bind(this).',
    type: 'ExpressionStatement'
}];

ruleTester.run('no-lodash-bindall', rule, {
    valid: [
        'this.myFunction.bind(this);',
        '1;' // check for valid expression without callee
    ],

    invalid: [
        {
            code: "bindAll(this, ['myFunction']);",
            errors
        }
    ]
});
