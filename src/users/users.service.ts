import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {CreateUserDto} from './dto/create-user.dto';
import { BaseUser } from './interfaces/base-user.entity';

@Injectable()
export class UsersService {
  
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: typeof User
  ) { }

  async create(createUserDto: CreateUserDto) {
    if (await this.findByEmail(createUserDto.email)){
      return {"error": "User already exist"}
    }else{
      return this.usersRepository.create(createUserDto);
    } 
  }
 
  async bulkCreate() {
    const json = {"page":1,"per_page":10,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"},{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
    const users: any = populateArrayToUsers(json.data)
    return this.usersRepository.bulkCreate(users)

  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {email}
    })
    
  }

  async find() {
    return await this.usersRepository.findAll()
    
  }

  findAll(page = 3, limit = 10): Promise<User[]> {
    return this.usersRepository.findAll({
      offset: page * limit - limit,
      limit
    });
  }

   count(): Promise<number> {
    return this.usersRepository.count()
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return  this.usersRepository.update(updateUserDto, {where:{id}})
  }

  remove(id: number) {
    return this.usersRepository.destroy({ where: { id } })
  }
}
function populateArrayToUsers(array: BaseUser[]) {
  const users = []
  array.forEach(e => {
    let u = e
    users.push(u)
  });
  return users
}

