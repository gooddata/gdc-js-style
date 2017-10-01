module.exports = (context) => {
    return {
        ImportDeclaration: (node) => {
            if (node.source.value === 'react-addons-test-utils') {
                context.report(node, 'Use Enyzme instead of react-addons-test-utils.');
            }
        }
    };
};
