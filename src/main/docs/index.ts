import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'BDev - Enquetes para Programadores',
    description: 'Essa é a documentação da API de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Gilberto Mossmann'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
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
