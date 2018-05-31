const { Decisions } = require ( './Decisions' );
const { Quizzes }   = require ( './Quizzes' );
const { Users }     = require ( './Users' );
const { Reports }   = require ( './Reports' );

module.exports = {
    Query:    {
        // ...Decisions.Query,
        // ...Quizzes.Query,
        ...Users.Query,
        // ...Reports.Query,
    },
    Mutation: {
        // ...Decisions.Mutation,
        // ...Quizzes.Mutation,
        ...Users.Mutation,
        // ...Reports.Mutation,
    }
};
