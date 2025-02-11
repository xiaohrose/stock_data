import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Zq {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;
}
