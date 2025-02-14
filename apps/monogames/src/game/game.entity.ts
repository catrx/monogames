import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'description', length: 180, nullable: false })
  description: string;

  @Column({ name: 'imageUrl', nullable: false })
  imageUrl: string;

  @Column({name: 'rating', type: 'float', nullable: true})
  rating: number;
}
