import { User } from './user';
import { FoodItem } from './food-item';

export var USERS: User[] = [
    { 
        emailid: 'marc@gmail.com', 
        password: 'admin@123', 
        name: 'Marc Almeida', 
        age: 21,  
        address: { 
            'Home': 'Salisbury Park, Pune 411037', 
            'Work': 'MIT WPU Kothrud, Pune', 
            'Secondary': "St. Vincent's Hgh School, Camp, Pune 411001" 
        },
        cart: []  
    },
    { 
        emailid: 'admin@gmail.com', 
        password: 'admin_says_0penS3sam3', 
        name: 'Admin', 
        age: null, 
        address: {
            'Home': "Yo Momma's House"
        },
        cart: [] 
    },
]

// [ {'label':'Home', 'value':'Salisbury Park, Pune 411037'}, {'label':'Work', 'value':'MIT WPU Kothrud, Pune'}, {'label':'Secondary', 'value':"St. Vincent's Hgh School, Camp, Pune 411001"} ]

 
    //     emailid: 'marc@gmail.com', 
    //     password: 'admin@123', 
    //     name: 'Marc Almeida', 
    //     age: 21,  
    //     address: [
    //         {
    //             'label': 'Home',
    //             'addrVal': 'Salisbury Park, Pune 411037'
    //         },
    //         {
    //             'label': 'Work',
    //             'addrVal': 'MIT WPU Kothrud, Pune'
    //         },
    //         {
    //             'label': 'Secondary',
    //             'addrVal': "St. Vincent's Hgh School, Camp, Pune 411001"
    //         },
    //     ]  
    // },

    // { 
    //     emailid: 'admin@gmail.com',
    //     password: 'admin_says_0penS3sam3', 
    //     name: 'Admin', 
    //     age: null,  
    //     address: [
    //         {
    //             'label': 'Home',
    //             'addrVal': "Yo Momma's House"
    //         },
    //     ]
    // },