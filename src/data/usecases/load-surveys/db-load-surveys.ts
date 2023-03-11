import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { LoadSurveys, SurveyModel } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
