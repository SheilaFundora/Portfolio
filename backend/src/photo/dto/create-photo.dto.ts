import { Usuario } from "src/usuario/entities/user.entity";

export class CreatePhotoDto {





    id:number;
    section:string;
    imgs: Buffer;
    user_id:Usuario;
}
