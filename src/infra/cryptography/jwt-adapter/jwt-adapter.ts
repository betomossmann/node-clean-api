import { Encrypter } from '@/data/protocols/cryptography/encrypter'
import Jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) {}

  async encrypt (value: string): Promise<string> {
    const accessToken = Jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}
