import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  userFirstName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  userLastName?: string;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  userName: string;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  userEmail: string;

  @Column({
    type: 'numeric',
    nullable: false,
  })
  userIdent: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  userPassword: string;
}
