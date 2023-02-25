import { type EmailValidator } from '../presentation/protocols/presentation'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
