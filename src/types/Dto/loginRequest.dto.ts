import { User } from '../user'

export interface LoginRequestDto extends Pick<User, 'email'> {
  password: string
}
