import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn
 } from "typeorm";

@Entity()
export class RecipeStep {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    description!: string;

    @Column()
    stepNumber!: number;

    @Column()
    recipeId!: number;

}