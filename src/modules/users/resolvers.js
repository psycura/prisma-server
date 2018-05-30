const { forwardTo } = require ( 'prisma-binding' );
const { auth }      = require ( '../../libs/firebaseAdmin' );

const resolvers = {
    Query:    {
        users:                      forwardTo ( 'db' ),
        comment:                    forwardTo ( 'db' ),
        comments:                   forwardTo ( 'db' ),
        commentsConnection:         forwardTo ( 'db' ),
        user:                       forwardTo ( 'db' ),
        managerProfiles:            forwardTo ( 'db' ),
        reporterProfiles:           forwardTo ( 'db' ),
        managerProfile:             forwardTo ( 'db' ),
        reporterProfile:            forwardTo ( 'db' ),
        managerProfilesConnection:  forwardTo ( 'db' ),
        reporterProfilesConnection: forwardTo ( 'db' ),
        usersConnection:            forwardTo ( 'db' ),
        
    },
    Mutation: {
        createManager:              async ( parent, args, ctx, info ) => {
            const { additionalPhone, address, email, firstName, userName, password, lastName, phone } = args.data;
            
            let userRecord = null;
            
            userRecord = await auth.getUserByEmail ( email )
            .catch ( ( error ) => {
                if ( error.code !== 'auth/user-not-found' ) {
                    console.log ( 'Error fetching user data:', error );
                    return;
                }
            } );
            
            if ( !userRecord ) {
                try {
                    userRecord = await auth.createUser ( {
                        email,
                        password,
                        displayName: `${firstName} ${lastName}`
                    } )
                } catch ( error ) {
                    console.log ( 'Error creating new user:', error );
                    return;
                }
            };
            const { uid } = userRecord;
            console.log ( 'USER_RECORD', uid );
            
            return await ctx.db.mutation.createUser ( {
                    uid,
                    email,
                    address,
                    additionalPhone,
                    firstName,
                    lastName,
                    phone,
                    managerProfile: {
                        create: {
                            userName,
                            isAdmin:  false,
                            isActive: true,
                        }
                    }
                },
                info
            )
        },
        createComment:              forwardTo ( 'db' ),
        deleteComment:              forwardTo ( 'db' ),
        updateManager:              forwardTo ( 'db' ),
        deleteUser:                 forwardTo ( 'db' ),
        updateManagerProfile:       forwardTo ( 'db' ),
        updateReporterProfile:      forwardTo ( 'db' ),
        deleteManagerProfile:       forwardTo ( 'db' ),
        deleteReporterProfile:      forwardTo ( 'db' ),
        deleteManyManagerProfiles:  forwardTo ( 'db' ),
        deleteManyReporterProfiles: forwardTo ( 'db' ),
    }
};

module.exports = { resolvers };
