import { 
    Column, 
    Entity,
    PrimaryGeneratedColumn
 } from "typeorm"

@Entity()
export class Ingredient {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    title!: string;

    @Column()
    amount!: number;

    @Column()
    unit!: string;

    @Column()
    recipeId!: number;

}