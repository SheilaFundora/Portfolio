import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { loginDto } from './dto/login.dto';
import { use } from 'passport';
import { error } from 'console';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import {v4} from 'uuid'
import { ActivateUserDto } from './dto/activate-user.dto';
import { resetPassword } from './dto/password-reset.dto';
import { linkPassDto } from './dto/linkPass.dto';
import { changePasswordDto } from './dto/change-password.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private UserRep:Repository<Usuario>,
    private jwtService:JwtService
)
{}
findAll()
{
return  this.UserRep.find();
}

getId(username: string)
{
    return this.UserRep.findOneBy({username});
}

async create(CreateUserDto: CreateUserDto): Promise<Usuario> {
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(CreateUserDto.password,salt);
    
    const NewUser = this.UserRep.create({    
      email: CreateUserDto.email,
      username: CreateUserDto.username,
      password: hashedPassword,
      activationToken: v4()});
    try{
      return this.UserRep.save(NewUser);
    } catch (e){
      if (e.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('email en uso')
      }
      throw new InternalServerErrorException();
    }
    
  }


async update (id:string, body:CreateUserDto){
    const user = await this.UserRep.findOneBy({id});
    if (!user) {
        throw new Error('id no encontrado');
      }

      this.UserRep.merge(user, body);
      return this.UserRep.save(user);
}


async Delete(id:number){
    await this.UserRep.delete(id);
    return true;
}

async login(loginDto: loginDto):Promise<{accessToken:string}> {
  const { username, password } = loginDto;
  const user = await this.UserRep.findOneBy({ username });
  if (!user){
    throw new UnauthorizedException('Revise las credenciales');
  }
  else{
  const hashedPassword = user.password;

  const comparacion = await bcrypt.compare(password, hashedPassword);

  console.log(comparacion);

  if (comparacion) {
    const payload:JwtPayload = {id:user.id,username,active:user.active};
    const accessToken = await this.jwtService.sign(payload);

    return {accessToken}
  } else {
    throw new UnauthorizedException('Revise las credenciales');
  }}
}

async activateUser(ActivateUserDto:ActivateUserDto){
  const {id, code}=ActivateUserDto;
  const user= await this.UserRep.findOne({ where: { id, activationToken: code, active: false } });
  if (!user){
    throw new UnprocessableEntityException('No puede ejecutar esta accion')
  }
  else{
    user.active = true; // Actualizar el atributo active
    await this.UserRep.save(user); // Guardar los cambios en el repositorio
  }
}

async requestResetPass(resetPassword:resetPassword){
  const {username}=resetPassword;
  const user = await this.UserRep.findOneBy({ username });
  if (!user){
    throw new NotFoundException(`Usuario ${username} no encontrado`);
  }
  else{
    user.resetPass=v4();
    this.UserRep.save(user); // Guardar los cambios en el repositorio
  }
}
async linkPass(linkPassDto:linkPassDto){
  const {resetPasswordToken,password}=linkPassDto;
  const user= await this.UserRep.findOne({ where: {resetPass: resetPasswordToken} });
  if (!user){
    throw new NotFoundException();
  }
  else{

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);
    user.password= hashedPassword;
    user.resetPass=null;
    this.UserRep.save(user);

  }
}

async changePass(changePasswordDto:changePasswordDto,user:Usuario){
  const {old_pass, new_pass}=changePasswordDto;
  console.log(old_pass)
  const comparacion = await bcrypt.compare(old_pass, user.password);
  if(comparacion){
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(new_pass,salt);
    user.password= hashedPassword;
    this.UserRep.save(user);
  }
  else{
    throw new BadRequestException('Contraseña actual no coincide')
  }
}

}
