import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UsuarioService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { loginDto } from './dto/login.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { resetPassword } from './dto/password-reset.dto';
import { linkPassDto } from './dto/linkPass.dto';
import { changePasswordDto } from './dto/change-password.dto';
import { GetUser } from './get-user.decorator';
import { Usuario } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post('/login')
  login(@Body() loginDto: loginDto):Promise<{accessToken:string}> {
    return this.userService.login(loginDto);
  }


  @Get('/activate')
  activate(@Query()ActivateUserDto:ActivateUserDto){
    return this.userService.activateUser(ActivateUserDto);
  }
  @Patch('/reset-pass')
  resetPass(@Body()resetPassword:resetPassword){
    return this.userService.requestResetPass(resetPassword)
  }

  @Patch('/link-pass')
  linkPass(@Body()linkPassDto:linkPassDto){
    return this.userService.linkPass(linkPassDto)
  }

  @Patch('/change-password')
  @UseGuards(AuthGuard())
  changePassword(@Body()changePasswordDto:changePasswordDto,@GetUser()user:Usuario){
    return this.userService.changePass(changePasswordDto,user)
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.Delete(+id);
  }
}
