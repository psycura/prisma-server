const admin = require ( 'firebase-admin' );

const serviceAccount = require ( './cbm-graphql-firebase-adminsdk-c7yu1-e20f5db0f5.json' );

const adminFb = admin.initializeApp ( {
    credential:  admin.credential.cert ( serviceAccount ),
    databaseURL: 'https://cbm-graphql.firebaseio.com'
} );

const auth = adminFb.auth ();

module.exports = { auth, adminFb };
