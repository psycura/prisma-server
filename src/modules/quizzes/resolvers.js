const { forwardTo } = require ( 'prisma-binding' );

const resolvers = {
    Query:    {
        questions:           ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        quizzes:             ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        question:            ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        quiz:                ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        questionsConnection: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        quizzesConnection:   ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    },
    Mutation: {
        createQuiz:          ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        createQuestion:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateQuiz:          ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateQuestion:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteQuestion:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteQuiz:          ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        upsertQuestion:      ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        upsertQuiz:          ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateManyQuestions: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        updateManyQuizzes:   ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteManyQuestions: ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
        deleteManyQuizzes:   ( parent, args, ctx, info ) => forwardTo ( 'db' ) ( parent, args, ctx, info ),
    }
};

module.exports = { resolvers };
