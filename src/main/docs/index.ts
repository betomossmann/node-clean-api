import paths from './paths'
import components from './components'
import schemas from './schemas'

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
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  }],
  paths,
  schemas,
  components
}
