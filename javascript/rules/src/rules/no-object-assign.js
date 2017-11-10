module.exports = (context) => {
    function calleeIsObjectAssign(callee) {
        if (!callee) {
            return false;
        }

        if (callee.object && callee.object.name === 'Object' && callee.property && callee.property.name === 'assign') {
            return true;
        }
        return false;
    }

    function raiseError(node) {
        context.report(node, 'Object.assign is forbidden, use destructuring assignment instead.');
    }

    return {
        VariableDeclaration: (node) => {
            node.declarations.forEach((variableDeclarator) => {
                if (!variableDeclarator.init) {
                    return;
                }
                const { callee } = variableDeclarator.init;
                if (calleeIsObjectAssign(callee)) {
                    raiseError(node);
                }
            })
        },
        ExpressionStatement: (node) => {
            const { callee } = node.expression;
            if (calleeIsObjectAssign(callee)) {
                raiseError(node);
            }
        },
        ReturnStatement: (node) => {
            if (!node.argument) {
                return;
            }
            const { callee } = node.argument;
            if (calleeIsObjectAssign(callee)) {
                raiseError(node);
            }
        }
    };
};
