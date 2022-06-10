import { 
  Column, 
  Entity,
  PrimaryGeneratedColumn 
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { RecipeStep } from "./RecipeStep";

@Entity()
export class Recipe {

    constructor(){}

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
  title!: string;

    @Column({
    nullable: true
  })
  mealType!: string;

    @Column({
    nullable: true
  })
  peopleServed!: number;

    @Column()
  difficultyLevel!: string;

    @Column({
    nullable: true
  })
  createdTime!: string;

    @Column({
    nullable: true
  })
  createdDate!: string;

    steps!: RecipeStep[];
    ingredients!: Ingredient[];

} 

