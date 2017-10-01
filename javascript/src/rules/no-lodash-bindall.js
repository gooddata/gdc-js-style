module.exports = (context) => {
    return {
        ExpressionStatement: (node) => {
            if (node.expression.callee.name === 'bindAll') {
                context.report(node, 'bindAll is forbidden (no function names in string). Use this.myFunction.bind(this).');
            }
        }
    };
};
