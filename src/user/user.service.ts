import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<void> {
        const { username, password } = createUserDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword: string = await bcrypt.hash(password, salt);
        
        try {
            const user = this.userRepository.create({ username, password: hashedPassword });
            await this.userRepository.save(user);
        } catch(err) {
            if(err.code === '23505') { // 중복된 username 에러
                throw new ConflictException('이미 존재하는 이름입니다.');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    
}
