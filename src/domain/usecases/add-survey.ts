import { SurveyResultModel } from '../models/survey-result'

export type AddSurveyParams = {
  question: string
  answers: SurveyResultModel[]
  date: Date
}

export interface AddSurvey {
  add: (data: AddSurveyParams) => Promise<void>
}
