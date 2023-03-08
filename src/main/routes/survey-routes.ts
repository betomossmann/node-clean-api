import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { Router } from 'express'
import { makeAddSurveyController } from '@/main/factories/controllers/add-survey/add-survey-controller-factory'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(makeAddSurveyController()))
}
