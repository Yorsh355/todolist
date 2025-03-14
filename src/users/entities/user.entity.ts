import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  // Id usuario
  @ApiProperty({
    example: '2855bb0a-9ef2-4c3e-94d0-4be84312eeeb',
    description: 'User Id',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nombre
  @ApiProperty({
    example: 'Juan',
    description: 'User name',
  })
  @Column({
    type: 'text',
    nullable: false,
  })
  firstName: string;

  // apellido
  @ApiProperty({
    example: 'Perez',
    description: 'User lastname',
  })
  @Column({
    type: 'text',
    nullable: false,
  })
  lastName?: string;

  // nombre de usuario
  @ApiProperty({
    example: 'Juan23',
    description: 'UserName',
    uniqueItems: true,
  })
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  userName: string;

  // correo electrónico
  @ApiProperty({
    example: 'Juan2023@gmail.com',
    description: 'User email',
    uniqueItems: true,
  })
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  email: string;

  // número de identificación
  @ApiProperty({
    example: '16078902',
    description: 'User ident',
    uniqueItems: true,
  })
  @Column({
    type: 'numeric',
    nullable: false,
    unique: true,
  })
  ident: number;

  // Clave
  @ApiProperty({
    example: 'Casita23#',
    description: 'User password',
    nullable: false,
  })
  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

  // usuario de creación
  @ApiProperty({
    example: '16075806',
    description: 'Created user ident',
  })
  @Column({
    type: 'numeric',
    nullable: false,
  })
  userCreate: number;

  // fecha de creación
  @ApiProperty({
    example: '2025/02/15 20:09:28',
    description: 'Created user date',
  })
  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  createdDate: Date;

  // usuario de actualización
  @ApiProperty({
    example: '16075806',
    description: 'Update user ident',
  })
  @Column({
    type: 'numeric',
    nullable: true,
  })
  userUpdate?: number;

  // fecha de actualización
  @ApiProperty({
    example: '2025/02/15 20:09:28',
    description: 'Update user date',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updatedDate?: Date;
}
