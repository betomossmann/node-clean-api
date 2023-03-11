import { SurveyResultModel } from '../models/survey-result'

export type AddSurveyModel = {
  question: string
  answers: SurveyResultModel[]
  date: Date
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
