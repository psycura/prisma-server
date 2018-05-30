const bcrypt        = require ( 'bcryptjs' );
const { forwardTo } = require ( 'prisma-binding' );

const resolvers = {
    Query:    {
        decisions:           ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        decisionsConnection: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        decision:            ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    },
    Mutation: {
        createDecision:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateDecision:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteDecision:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        upsertDecision:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateManyDecisions: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteManyDecisions: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    }
};

module.exports = { resolvers };
