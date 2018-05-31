const { forwardTo } = require ( 'prisma-binding' );

const Quizzes = {
    Query:    {
        // questions:           forwardTo ( 'db' ),
        // quizzes:             forwardTo ( 'db' ),
        // question:            forwardTo ( 'db' ),
        // quiz:                forwardTo ( 'db' ),
        // questionsConnection: forwardTo ( 'db' ),
        // quizzesConnection:   forwardTo ( 'db' ),
    },
    Mutation: {
        // createQuiz:          forwardTo ( 'db' ),
        // createQuestion:      forwardTo ( 'db' ),
        // updateQuiz:          forwardTo ( 'db' ),
        // updateQuestion:      forwardTo ( 'db' ),
        // deleteQuestion:      forwardTo ( 'db' ),
        // deleteQuiz:          forwardTo ( 'db' ),
        // updateManyQuestions: forwardTo ( 'db' ),
        // updateManyQuizzes:   forwardTo ( 'db' ),
        // deleteManyQuestions: forwardTo ( 'db' ),
        // deleteManyQuizzes:   forwardTo ( 'db' ),
    }
};

module.exports = { Quizzes };
