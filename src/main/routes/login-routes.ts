import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { makeLoginController } from '@/main/factories/login/login-factory'
import { makeSignupController } from '@/main/factories/signup/signup'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
