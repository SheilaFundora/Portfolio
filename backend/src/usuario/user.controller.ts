import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, BadRequestException, UploadedFiles } from '@nestjs/common';
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
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ValidateTokenDto } from './dto/validate-token.dto';

@Controller('auth')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Post('/register')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cvSpanish', maxCount: 1 },
      { name: 'cvEnglish', maxCount: 1 }
    ], {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
          return cb(new BadRequestException('Only PDF files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
  )
  async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFiles() files: { cvSpanish?: Express.Multer.File[], cvEnglish?: Express.Multer.File[] }
  ) {
    return this.userService.create(createUserDto, files);
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
