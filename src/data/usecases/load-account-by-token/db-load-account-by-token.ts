import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { LoadAccountByToken } from '@/domain/usecases/load-account-by-token'
import { AccountModel } from '../add-account/db-add-account-protocols'
import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/load-Account-by-token-repository'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(token, role)
      if (account) {
        return account
      }
    }
    return null
  }
}