const jwt = require ( 'jsonwebtoken' );

function getUserId ( ctx, jwtToken = '' ) {
    let token = '';
    
    if ( jwtToken ) {
        token = jwtToken;
    } else {
        const Authorization = ctx.request.get ( 'Authorization' );
        if ( Authorization ) {
            token = Authorization.replace ( 'Bearer ', '' )
        }
    }
    
    if ( token ) {
        const { userId } = jwt.verify ( token, process.env.APP_SECRET );
        return userId
    }
    
    throw new AuthError ()
}

function createToken ( userId ) {
    return jwt.sign ( { userId, expiresIn: '7d' }, process.env.APP_SECRET )
}

class AuthError extends Error {
    constructor () {
        super ( 'Not authorized' )
    }
}

module.exports = {
    getUserId,
    AuthError,
    createToken
};
