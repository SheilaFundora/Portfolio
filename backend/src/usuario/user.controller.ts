import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
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
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ValidateTokenDto } from './dto/validate-token.dto';

@Controller('auth')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Post('/register')
  //@UseInterceptors(
  //FileInterceptor('file', {
    //storage: diskStorage({
      //destination: './uploads',
      //filename: (req, file, callback) => {
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        //const ext = extname(file.originalname);
        //callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      //},
    //}),
      //fileFilter: (req, file, callback) => {
        //if (!file.originalname.match(/\.(pdf)$/)) {
          //return callback(new Error('Only PDF files are allowed!'), false);
        //}
        //callback(null, true);
      //},
    //}),
  //)
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

  @Post('validate-token')
  async validateToken(@Body() validateTokenDto: ValidateTokenDto): Promise<{ valid: boolean }> {
    const isValid = await this.userService.validateToken(validateTokenDto.token);
    return { valid: isValid };
  }

  @Get(':username')
  async getUser(@Param('username') username: string) {
    return this.userService.getUser(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.Delete(id);
  }
}
