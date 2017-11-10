module.exports = (context) => {
    return {
        ExpressionStatement: (node) => {
            const { callee } = node.expression;
            if (callee && callee.name === 'bindAll') {
                context.report(node, 'bindAll is forbidden (no function names in string). Use this.myFunction.bind(this).');
            }
        }
    };
};
