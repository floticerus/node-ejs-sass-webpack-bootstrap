const path = require( 'path' )

module.exports = {
    // NOTE change to production when ready
    mode: 'development',

    entry: path.join( __dirname, 'src', 'js', 'index.js' ),

    output:
    {
        filename: 'main.js',

        path: path.resolve( __dirname, 'public', 'js' )
    }
}
