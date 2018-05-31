const { forwardTo } = require ( 'prisma-binding' );
// const { auth }      = require ( '../libs/firebaseAdmin' );

const createUser = async (  args, ctx, info ) => {
    const { additionalPhone, address, email, uid, firstName, userName, lastName, phone } = args;
    return ctx.db.mutation.createUser ( {
            email,
            address,
            additionalPhone,
            firstName,
            lastName,
            phone,
            uid,
            managerProfile: {
                create: {
                    userName,
                    isAdmin:  false,
                    isActive: true,
                }
            }
        },
        info
    );
};

const Users = {
    Query:    {
        users:            forwardTo ( 'db' ),
        user:             forwardTo ( 'db' ),
        managerProfiles:  forwardTo ( 'db' ),
        reporterProfiles: forwardTo ( 'db' ),
        managerProfile:   forwardTo ( 'db' ),
        reporterProfile:  forwardTo ( 'db' ),
        
    },
    Mutation: {
        createManager: async ( parent, args, ctx, info ) => {
            const { additionalPhone, address, email, firstName, userName, password, lastName, phone } = args.data;
            
            // let userRecord = null;
            //
            // userRecord = await auth.getUserByEmail ( email )
            // .catch ( ( error ) => {
            //     if ( error.code !== 'auth/user-not-found' ) {
            //         console.log ( 'Error fetching user data:', error );
            //         return;
            //     }
            // } );
            //
            // if ( !userRecord ) {
            //     try {
            //         userRecord = await auth.createUser ( {
            //             email,
            //             password,
            //             displayName: `${firstName} ${lastName}`
            //         } )
            //     } catch ( error ) {
            //         console.log ( 'Error creating new user:', error );
            //         return;
            //     }
            // }
            // const { uid } = userRecord;
            const uid="123";
            const data    = { additionalPhone, address, email, firstName, userName, lastName, phone, uid };
            console.log ( 'USER_RECORD', uid );
            
            return createUser (  data, ctx, info )
        },
        
        updateManager:         forwardTo ( 'db' ),
        deleteUser:            forwardTo ( 'db' ),
        updateManagerProfile:  forwardTo ( 'db' ),
        updateReporterProfile: forwardTo ( 'db' ),
    }
};

module.exports = { Users };
