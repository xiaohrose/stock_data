import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Zq {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ce: string;

  @Column()
  price: string;

  @Column()
  percent: string;

  @Column()
  up: string;

  @Column()
  down: string;

  @Column()
  time: string;

  @Column()
  abs: string;

  @Column()
  TurnoverRate: string;

  @Column()
  volumeOfTransaction: string;

  @Column()
  Turnover: string;

  @Column()
  code: string;

  @Column()
  name: string;
}
