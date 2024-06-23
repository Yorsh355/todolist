import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  //Id usuario
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  //Nombre
  @Column({
    type: 'text',
    nullable: false,
  })
  userFirstName: string;

  //apellido
  @Column({
    type: 'text',
    nullable: true,
  })
  userLastName?: string;

  //nombre de usuario
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  userName: string;

  //correo electrónico
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  userEmail: string;

  //número de identificación
  @Column({
    type: 'numeric',
    nullable: false,
  })
  userIdent: number;

  //Clave
  @Column({
    type: 'text',
    nullable: false,
  })
  userPassword: string;

  //usuario de creación
  @Column({
    type: 'numeric',
    nullable: false,
  })
  userCreate: number;

  //fecha de creación
  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  userCreateDate: Date;

  //usuario de actualización
  @Column({
    type: 'numeric',
    nullable: true,
  })
  userUpdate?: number;

  //fecha de creación
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  userUpdateDate?: Date;
}
