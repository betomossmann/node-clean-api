import { AddSurveyRepository } from '@/data/protocols/survey/add-survey-repository'
import { LoadSurveyByIdRepository } from '@/data/protocols/survey/load-survey-by-id-repository'
import { LoadSurveysRepository } from '@/data/protocols/survey/load-surveys-repository'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyModel } from '@/domain/usecases/add-survey'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveyDocs = await surveyCollection.find().toArray()
    const surveys = surveyDocs.map(surveyDoc => {
      const { _id, question, answers, date } = surveyDoc
      return {
        id: _id.toString(),
        question,
        answers,
        date
      }
    })
    return surveys
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const survey = await (await surveyCollection).findOne({ _id: new ObjectId(id) })
    return survey && MongoHelper.map(survey)
  }
}
