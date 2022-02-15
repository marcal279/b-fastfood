import { FoodItem } from './food-item';

export interface User{
    emailid: string,
    password: string,
    name: string,
    age: Number|null,
    address: object,
    cart: FoodItem[]
}

// instead of string list, could also create and import an address interface, would get diff components of the address