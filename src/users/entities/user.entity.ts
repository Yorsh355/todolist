import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  //Id usuario
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //Nombre
  @Column({
    type: 'text',
    nullable: false,
  })
  firstName: string;

  //apellido
  @Column({
    type: 'text',
    nullable: false,
  })
  lastName?: string;

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
  email: string;

  //número de identificación
  @Column({
    type: 'numeric',
    nullable: false,
    unique: true,
  })
  ident: number;

  //Clave
  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

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
  createdDate: Date;

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
  updatedDate?: Date;
}
