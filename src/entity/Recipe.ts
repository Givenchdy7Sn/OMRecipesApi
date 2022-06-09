import { 
  Column, 
  Entity,
  PrimaryGeneratedColumn 
} from "typeorm";

import {
  Ingredient
} from "c:/Users/mgmoj/Videos/old mutual/recipesApi/src/entity/Ingredient";

import { 
  RecipeStep 
} from "c:/Users/mgmoj/Videos/old mutual/recipesApi/src/entity/RecipeStep";

@Entity()
export class Recipe {

    constructor(){}

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        nullable: true
    })
    mealType: string;

    @Column({
        nullable: true
    })
    peopleServed: number;

    @Column()
    difficultyLevel: string;

    @Column({
        nullable: true
    })
    createdTime: string;

    @Column({
        nullable: true
    })
    createdDate: string;

    steps: RecipeStep[];
    ingredients: Ingredient[];

} 

