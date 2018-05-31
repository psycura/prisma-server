const { forwardTo } = require ( 'prisma-binding' );

const Reports = {
    Query:    {
        // answers:           forwardTo ( 'db' ),
        // files:             forwardTo ( 'db' ),
        // reports:           forwardTo ( 'db' ),
        // answer:            forwardTo ( 'db' ),
        // file:              forwardTo ( 'db' ),
        // report:            forwardTo ( 'db' ),
        // answersConnection: forwardTo ( 'db' ),
        // filesConnection:   forwardTo ( 'db' ),
        // reportsConnection: forwardTo ( 'db' ),
    },
    Mutation: {
        // createAnswer:      forwardTo ( 'db' ),
        // createFile:        forwardTo ( 'db' ),
        // createReport:      forwardTo ( 'db' ),
        // updateAnswer:      forwardTo ( 'db' ),
        // updateFile:        forwardTo ( 'db' ),
        // updateReport:      forwardTo ( 'db' ),
        // deleteAnswer:      forwardTo ( 'db' ),
        // deleteFile:        forwardTo ( 'db' ),
        // deleteReport:      forwardTo ( 'db' ),
        // updateManyReports: forwardTo ( 'db' ),
        // deleteManyFiles:   forwardTo ( 'db' ),
        // deleteManyReports: forwardTo ( 'db' ),
    }
};

module.exports = { Reports };
