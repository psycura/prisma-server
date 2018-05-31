const bcrypt        = require ( 'bcryptjs' );
const { forwardTo } = require ( 'prisma-binding' );

const Decisions = {
    Query:    {
        // decisions:           forwardTo ( 'db' ),
        // decisionsConnection: forwardTo ( 'db' ),
        // decision:            forwardTo ( 'db' ),
    },
    Mutation: {
        // createDecision:      forwardTo ( 'db' ),
        // updateDecision:      forwardTo ( 'db' ),
        // deleteDecision:      forwardTo ( 'db' ),
        // updateManyDecisions: forwardTo ( 'db' ),
        // deleteManyDecisions: forwardTo ( 'db' ),
    }
};

module.exports = { Decisions };
