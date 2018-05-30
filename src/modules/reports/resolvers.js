const { forwardTo } = require ( 'prisma-binding' );

const resolvers = {
    Query:    {
        answers:            ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        files:              ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        reports:            ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        answer:             ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        file:               ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        report:             ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        answersConnection:  ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        filesConnection:    ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        reportsConnection:  ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    },
    Mutation: {
        createAnswer:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        createFile:         ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        createReport:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateAnswer:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateFile:         ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateReport:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteAnswer:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteFile:         ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteReport:       ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateManyReports:  ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteManyFiles:    ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteManyReports:  ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    }
};

module.exports = { resolvers };
