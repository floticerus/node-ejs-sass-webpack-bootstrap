const path = require( 'path' )

const dirz = require( 'dirz' )

dirz.set( 'pkg', require( path.join( dirz.get( 'root-dir' ), 'package.json' ) ) )

dirz.set( 'port', parseInt( process.env.PORT || 3000 ) )
