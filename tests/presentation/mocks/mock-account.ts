import { AddAccount, Authentication, LoadAccountByToken } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  result = true

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    this.params = params
    return this.result
  }
}

export class AuthenticationSpy implements Authentication {
  params: Authentication.Params
  result = {
    accessToken: faker.string.uuid(),
    name: faker.person.fullName()
  }

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    this.params = params
    return this.result
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  accessToken: string
  role: string
  result = {
    id: faker.string.uuid()
  }

  async load (accessToken: string, role?: string): Promise<LoadAccountByToken.Result> {
    this.accessToken = accessToken
    this.role = role
    return this.result
  }
}
