import { RuleTester } from 'eslint';
import rule from '../no-react-addons-test-utils';

const ruleTester = new RuleTester({
    env: {
        es6: true
    },
    parserOptions: {
        sourceType: 'module'
    }
});

const errors = [{
    message: 'Use Enyzme instead of react-addons-test-utils.',
    type: 'ImportDeclaration'
}];

ruleTester.run('no-react-addons-test-utils', rule, {
    valid: [
        "import { mount } from 'enyzme';",
        "import { shallow } from 'enyzme';",
        "import { mount, shallow } from 'enyzme';"
    ],

    invalid: [
        {
            code: "import ReactTestUtils from 'react-addons-test-utils';",
            errors
        },
        {
            code: "import { renderIntoDocument } from 'react-addons-test-utils';",
            errors
        }
    ]
});
