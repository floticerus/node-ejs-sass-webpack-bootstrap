const express = require( 'express' )

const path = require( 'path' )

const dirz = require( 'dirz' )

const router = express.Router()

// validate stuff maybe?

router.use( ( req, res, next ) =>
    {
        res.locals.dirz = dirz

        next()
    }
)

// router.use( '/jquery', express.static( path.join( 'root-dir' ), 'node_modules', 'jquery', 'dist' ) )
// router.use( '/popper.js', express.static( path.join( 'root-dir' ), 'node_modules', 'popper.js', 'dist' ) )
router.use( '/css/bootstrap', express.static( path.join( dirz.get( 'root-dir' ), 'node_modules', 'bootstrap', 'dist', 'css' ) ) )

router.use( require( 'node-sass-middleware' )(
    {
        src: path.join( dirz.get( 'src-dir' ), 'css' ),

        dest: path.join( dirz.get( 'root-dir' ), 'public', 'css' ),

        debug: true,

        indentedSyntax: false,

        prefix: '/css'
    }
))

router.use( express.static( path.join( dirz.get( 'root-dir' ), 'public' ) ) )

router.get( '/', ( req, res, next ) =>
    {
        res.render( 'index' )
    }
)

module.exports = router
