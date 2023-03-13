import { loginPath } from './paths/login-path'
import { accountSchema } from './schemas/account-schema'
import { loginParamsSchema } from './schemas/login-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation Node Clean',
    description: 'API de login e enquetes',
    version: '1.0.0',
    contact: {
      name: 'Gilberto Mossmann',
      url: 'https://www.linkedin.com/in/gilbertomossmann'
    }
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema
  }
}
