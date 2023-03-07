import { DbAddSurvey } from './db-add-survey'
import { AddSurveyModel, AddSurveyRepository } from './db-add-survey-protocols'

const makeFakeSurveyData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }]
})

const makeAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyModel): Promise<void> {
      await new Promise<void>(resolve => { resolve() })
    }
  }
  return new AddSurveyRepositoryStub()
}

interface SutTypes {
  sut: DbAddSurvey
  addSurveyRepositorySub: AddSurveyRepository
}

const makeSut = (): SutTypes => {
  const addSurveyRepositorySub = makeAddSurveyRepository()
  const sut = new DbAddSurvey(addSurveyRepositorySub)
  return {
    sut,
    addSurveyRepositorySub
  }
}

describe('DbAddSurvey Usecase', () => {
  test('Should call AddSurveyRepository with correct values', async () => {
    const { sut, addSurveyRepositorySub } = makeSut()
    const addSpy = jest.spyOn(addSurveyRepositorySub, 'add')
    const surveyData = makeFakeSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })

  test('Should throws if AddSurveyRepository throws', async () => {
    const { sut, addSurveyRepositorySub } = makeSut()
    jest.spyOn(addSurveyRepositorySub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => { reject(new Error()) }))
    const promise = sut.add(makeFakeSurveyData())
    await expect(promise).rejects.toThrow()
  })
})