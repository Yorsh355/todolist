import { BaseInterfaceRepository } from '../../common/repository/base.interface.repository';
import { User } from '../entities/user.entity';

export type IUsersRepository = BaseInterfaceRepository<User>;
