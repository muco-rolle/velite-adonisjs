/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { HomePage } from '#views/home/page'
import router from '@adonisjs/core/services/router'
import { posts } from '../.velite/index.js'

router.get('/', function () {
  console.log(posts)
  return <HomePage name="Tresor Muco" />
})
