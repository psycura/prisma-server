const { GraphQLServer } = require ( 'graphql-yoga' );
const { Prisma }        = require ( 'prisma-binding' );
const express           = require ( 'express' );
const { genSchema }     = require ( './utils/genSchema' );

const db = new Prisma ( {
    typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
    endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
    debug:    true, // log all GraphQL queries & mutations sent to the Prisma API
    // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
} );

const server = new GraphQLServer ( {
    schema:                    genSchema (),
    
    context:                   req => ({ ...req, db }),
} );

server.express.use ( '/images', express.static ( 'images' ) );
const port = process.env.NODE_ENV === 'test' ? 0 : 4015;

server.start ( {
        port
    },
    () => console.log ( 'Server is running on http://localhost:' + port )
);
