const { importSchema }                       = require ( 'graphql-import' );
const fs                                     = require ( 'fs' );
const { makeExecutableSchema, mergeSchemas } = require ( 'graphql-tools' );
const path                                   = require ( 'path' );

const genSchema = () => {
    const schemas = [];
    
    const folders = fs.readdirSync ( path.join ( __dirname, '../modules' ) );
    folders.forEach ( ( folder ) => {
        const { resolvers } = require ( `../modules/${folder}/resolvers` );
        const typeDefs      = importSchema ( path.join ( __dirname, `../modules/${folder}/schema.graphql` ) );
        schemas.push ( makeExecutableSchema ( {
            resolvers, typeDefs, resolverValidationOptions: {
                requireResolversForResolveType: false
            },
        } ) )
        
    } );
    
    return mergeSchemas ( { schemas } );
};

module.exports = { genSchema };
