import { UserEntity } from '../user'

export interface LoginRequestDto extends Pick<UserEntity, 'email' | 'password'> {}
