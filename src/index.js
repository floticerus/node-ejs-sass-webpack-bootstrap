const cluster = require( 'cluster' )

const dirz = require( 'dirz' )

dirz.set( 'src-dir', __dirname )

const path = require( 'path' )

// setup config
require( path.join( dirz.get( 'src-dir' ), 'config' ) )

if ( cluster.isMaster )
{
  return require( 'os' ).cpus().forEach( () => cluster.fork() )
}

const express = require( 'express' )

// create app
const app = express()

// setup app

// use helmet for a little extra security
app.use( require( 'helmet' )(
  {

  }
))

// use EJS view engine
app.set( 'view engine', 'ejs' )

app.set( 'views', path.join( dirz.get( 'src-dir' ), 'views' ) )

// setup routes
app.use( '/', require( path.join( dirz.get( 'src-dir' ), 'routes' ) ) )

// create server
app.listen( dirz.get( 'port' ), () => console.log( `${ dirz.get( 'pkg' ).name } server listening on port ${ dirz.get( 'port' ) }` ) )
