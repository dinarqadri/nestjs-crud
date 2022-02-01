import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationException } from './exceptions/validation.exception';
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async find(@Query('page') page: number, @Query('pageSize') pageSize: number) {
    const data = await this.usersService.findAll(+page, +pageSize)
    const total = await this.usersService.count()
    const total_pages = Math.ceil(total / pageSize)
    return {
      page,
      pageSize,
      total,
      total_pages,
      data,
      support: { url: "https://reqres.in/#support-heading", text: "To keep ReqRes free, contributions towards server costs are appreciated!" }
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.usersService.remove(+id);
  }
}


