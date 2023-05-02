import { UserEntity } from '../user'

export interface UpdateRequestDto extends Pick<UserEntity, 'years' | 'email' | 'phoneNumber' | 'employeeNumber'> {}
