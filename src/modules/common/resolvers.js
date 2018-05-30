const { forwardTo }              = require ( 'prisma-binding' );
const { createToken, getUserId } = require ( '../../utils/utils' );
const { auth, adminFb }          = require ( '../../libs/firebaseAdmin' );

const resolvers = {
    
    Query:       {
        isUserLoggedIn: async ( parent, {token}, ctx, info ) => {
        
        }
    },
    AuthPayload: {
        user: async ( { user: { id } }, args, ctx, info ) => {
            return ctx.db.query.user ( { where: { id } }, info )
        },
    },
    Mutation:    {
        async refreshToken ( parent, args, ctx, info ) {
            const userId = getUserId ( ctx );
            return {
                token: createToken ( userId ),
                userId
            }
            
        },
        
        async signup ( parent, args, ctx, info ) {
            const password = await bcrypt.hash ( args.password, 10 );
            const user     = await ctx.db.mutation.createUser ( {
                data: { ...args, password },
            } );
            
            return {
                token: createToken ( user.id ),
                user,
            }
        },
        
        async login ( parent, { email, password }, ctx, info ) {
            const user = await ctx.db.query.user ( { where: { email } } );
            if ( !user ) {
                return {
                    error: {
                        field:   'email',
                        message: 'No User Found'
                    }
                }
            }
            
            const valid = await bcrypt.compare ( password, user.password );
            if ( !valid ) {
                return {
                    error: {
                        field:   'pass',
                        message: 'Wrong Password'
                    }
                }
            }
            
            return {
                payload: {
                    token: createToken ( user.id ),
                    user,
                }
                
            }
        },
    }
};

module.exports = { resolvers };
