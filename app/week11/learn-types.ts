//if we have a function that adds two numbers and we use strings as parameters what happens is that the function will concatenate the strings.

//we can change the type of language to typescript.//idempotempt
import {z} from "zod";

let a:number = 5;
let string_example:string = "person";


function add(a:number, b:number){
    return a + b;
};
interface Person{
    name: string;
    age: number;
    address?: string;
}

let person1: Person = {
    name: "Ana",
    age: 31, 
};


person1.address = "223 Main St.";

//zod schema

const newUserSchema = z.object({
    name: z.string(),
    age: z.number().min(0).max(100),
});