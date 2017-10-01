module.exports = (context) => {
    return {
        ExpressionStatement: (node) => {
            const { callee } = node.expression;
            if (callee.object.name === 'Object' && callee.property.name === 'assign') {
                context.report(node, 'Object.assign is forbidden, use destructuring assignment instead.');
            }
        }
    };
};
